'use strict';

const Controller = require('egg').Controller;

class ArticleInfoController extends Controller {

  // 获取文章详情
  async getArticleInfo() {
    const { ctx, app } = this
    const { Op } = app.Sequelize
    try {
      let { id } = ctx.params
      id = parseInt(id)
      const params = {
        include: [
          { model: app.model.Menu },
          { model: app.model.Technology },
          { 
            model: app.model.UserInfo,
            attributes: ['avatar'],
            include: [
              {
                model: app.model.User,
                attributes: ['name']
              }
            ]
          }
        ],
        where: {
          id,
          status: 1
        }
      }

      const article = await ctx.service.mysql.findAll(params, 'Article')
      if(article.length === 0) {
        ctx.status = 200
        ctx.body = {
          success: 0,
          data: '文章不存在'
        }
        return 
      }
      const number = parseInt(article[0].readnumber)

      await article[0].update({ readnumber: number + 1})

      const technologyid = article[0].technologyid

      console.log(technologyid)

      const params1 = {
        where: {
          technologyid,
          id: {
            [Op.ne]: id
          }
        },
        attributes: ['id', 'postlink', 'title'],
        order: [['created_at', 'DESC']],
        limit: 3
      }
      
      const recommend = await ctx.service.mysql.findAll(params1, 'Article')
      const params2 = {
        include: [
          { 
            model: app.model.UserInfo,
            attributes: ['avatar'],
            include: [
              { 
                model: app.model.User ,
                attributes: ['name']
              }
            ]
          }
        ],
        where: {
          article_id: id,
          status: 1
        },
        order: [['created_at', 'DESC']],
        limit: 6
      }

      const comments = await ctx.service.mysql.findAll(params2, 'Comment')
      if(comments.length === 0) {
        ctx.status = 200 
        ctx.body = {
          success: 0,
          data: '暂无评论'
        }
      }

      ctx.status = 200
      ctx.body = {
        success: 1,
        data: {
          article,
          recommend,
          comments
        }
      }
    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }

  // 收藏文章
  async collectArticle() {
    const { ctx } = this
    try {
      // 判断用户是否登录
      const token = ctx.header.authorization;
      const author = await ctx.service.jwt.verifyToken(token);
      if (!author) {
        ctx.status = 403;
      } else {
        let { id } = ctx.request.body
        id = parseInt(id)
        const userid = ctx.session.userid
        const params = {
          articleid: id,
          userid
        }
        await ctx.service.mysql.create(params, 'Favorite')
        ctx.status = 200
        ctx.body = {
          success: 1,
          data: '文章收藏成功'
        }
      }
    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }

  // 取消收藏文章
  async cancelArticle() {
    const { ctx } = this
    try {
      // 判断用户是否登录
      const token = ctx.header.authorization;
      const author = await ctx.service.jwt.verifyToken(token);
      if (!author) {
        ctx.status = 403;
      } else {
        let { id } = ctx.request.body
        id = parseInt(id)
        id = parseInt(id)
        const userid = ctx.session.userid
        const params = {
          where: {
            userid,
            articleid: id
          }
        }

        const favorite = await ctx.service.mysql.findAll(params, 'Favorite')
        await favorite[0].destroy()
        ctx.status = 200
        ctx.body = {
          success: 1,
          data: favorite
        }
      }
    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }
  
}

module.exports = ArticleInfoController;
