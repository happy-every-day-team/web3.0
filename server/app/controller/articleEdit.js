'use strict';

const Controller = require('egg').Controller;

class ArticleEditController extends Controller {

  // 编辑文章
  async editArticle() {
    const { ctx, app } = this
    try{
      // 判断用户是否登录
      const token = ctx.header.authorization;
      const author = await ctx.service.jwt.verifyToken(token);
      if (!author) {
        ctx.status = 403;
      } else {
        let { id } = ctx.request.body
        id = parseInt(id)
        const userid = ctx.session.userid
        const table = 'Article'
        const params = {
          where: {
            status: 1
          }
        }
        const menu = await ctx.service.mysql.findAll(params, 'Menu')
        const technology = await ctx.service.mysql.findAll(params, 'Technology')
        const userInfo = await ctx.service.mysql.findAll({where: {id: userid}, attributes: ['avatar']}, 'UserInfo')

        const params2 = {
          include: [
            { model: app.model.Menu },
            { model: app.model.Technology },
            {
              model: app.model.UserInfo,
              include: [
                { model: app.model.User }
              ]
            }
          ],
          where: {
            userid,
            status: 2
          }
        }
        const params3 = {
          where: {
            id,
            userid
          }
        }

        let article
        if(id === '') {
          article = await ctx.service.mysql.findAll(params2, table)
        } else {
          article = await ctx.service.mysql.findAll(params3, table)
        }
        if(article.length === 0) {
          article = await ctx.service.mysql.create({userid, status: 2 }, table)
          ctx.status = 200
          ctx.body = {
            success: 1,
            data: {
              menu,
              technology,
              article,
              userInfo
            }
          }
        } else {
          ctx.status = 200
          ctx.body = {
            success: 0,
            data: {
              menu,
              technology,
              article,
              userInfo
            }
          }
        }
      }
    }catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }

  // 上传文章封面
  async uploadArticleCover() {
    const { ctx } = this
    try {
      // 判断用户是否登录
      const token = ctx.header.authorization;
      const author = await ctx.service.jwt.verifyToken(token);
      if (!author) {
        ctx.status = 403;
      } else {
        let { id, status, key } = ctx.request.body
        id = parseInt(id)
        const userid = ctx.session.userid

        const postlink = await ctx.service.qiniu.getCDN(key)
        const table = 'Article'
        const params = {
          userid,
          postlink,
          status: 2
        }

        let article
        if(parseInt(status) === 1) {
          article = await ctx.service.mysql.create(params, table)
        } else {
          article = await ctx.service.mysql.findById(id, table)
          await article.update(params)
        }
        ctx.status = 200
        ctx.body = {
          success: 1,
          data: article
        }
      }
    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }

  // 上传文章详情
  async uploadArticleInfo() {
    const { ctx } = this
    try{
      const token = ctx.header.authorization;
      const author = await ctx.service.jwt.verifyToken(token);
      if (!author) {
        ctx.status = 403;
      } else {
        const { id, title, status, abstract, context, raw, postlink, technologyid, keywords, menuid, date } = ctx.request.body
        const created_at = new Date(date)
        const userid = ctx.session.userid
        const table = 'Article'
        const params = {
          where: {
            id, 
            userid
          }
        }
        const params1 = {
          id, userid, title, menuid, technologyid,
          abstract, keywords, postlink, raw, 
          context, created_at,
          status: 1
        }
        if(parseInt(status) === 1) {
          await ctx.service.mysql.create(params1, table)
        } else {
          let article = await ctx.service.mysql.findAll(params, table)
          await article[0].update(params1)
        }
        ctx.status = 200
        ctx.body = {
          success: 1,
          data: '文章详情上传成功'
        }

      }
    } catch(err) {
      console.log(err);
      ctx.status = 404;
    }
  }
  
  // 删除文章封面
  async delArticleCover() {
    const { ctx } = this
    try{
      const token = ctx.header.authorization;
      const author = await ctx.service.jwt.verifyToken(token);
      if (!author) {
        ctx.status = 403;
      } else {
        const { id, postlink } = ctx.request.body
        const array = postlink.split('/')
        const key = array[array.length - 1]
        const table = 'Article'
        const params = {
          postlink: ''
        }
        const article = await ctx.service.mysql.findById(id, table)
        // await article.update(params)
        await ctx.service.qiniu.deleteFile('webimg', key)
        ctx.status = 200
        ctx.body = {
          success: 1,
          data: '文章封面删除成功'
        }
      }
    } catch(err) {
      console.log(err);
      ctx.status = 404;
    }
  }

  // 上传文章资源
  async uploadArticleResource() {
    const { ctx } = this
    try{
      const token = ctx.header.authorization;
      const author = await ctx.service.jwt.verifyToken(token);
      if (!author) {
        ctx.status = 403;
      } else {
        const { id, key } = ctx.request.body
        const userid = ctx.session.userid
        const link = await ctx.service.qiniu.getCDN(key)
        const params = {
          userid,
          articleid: id,
          link,
          key
        }
        const media = await ctx.service.mysql.create(params, 'Media')
        ctx.status = 200
        ctx.body = {
          success: 1,
          data: media
        }
      }
    } catch(err) {
      console.log(err);
      ctx.status = 404;
    }
  }

  // 获取媒体信息
  async getMediaItems() {
    const { ctx } = this
    try{
      const token = ctx.header.authorization;
      const author = await ctx.service.jwt.verifyToken(token);
      if (!author) {
        ctx.status = 403;
      } else {
        const userid = ctx.session.userid
        const params = {
          where: {
            userid,
            status: 1
          }
        }
        const mediaItem = await ctx.service.mysql.findAll(params, 'Media')
        ctx.status = 200
        ctx.body = {
          success: 1,
          data: mediaItem
        }
      }
    } catch(err) {
      console.log(err);
      ctx.status = 404;
    }
  }

  // 删除媒体信息
  async removeMedia() {
    const { ctx, app } = this
    const { Op } = app.Sequelize
    try{
      const token = ctx.header.authorization;
      const author = await ctx.service.jwt.verifyToken(token);
      if (!author) {
        ctx.status = 403;
      } else {
        const { data } = ctx.request.body
        const array = data.map(item => { id: item.id })
        const params = {
          where: {
            [Op.or]: array
          }
        }
        const media = await ctx.service.mysql.findAll(params, 'Media')
        media.map(item => {
          // await item.update({status: 0})
        })

        ctx.status = 200
        ctx.body = {
          success: 1,
          data: '媒体数据删除成功'
        }
      }
    } catch(err) {
      console.log(err);
      ctx.status = 404;
    }
  }
}
 
module.exports = ArticleEditController;
