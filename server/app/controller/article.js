'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {

  // 获取文章
  async getArticle() {
    const { ctx, app } = this

    try {
      let { begin, end, index } = ctx.request.body
      begin = parseInt(begin)
      end = parseInt(end)
      index = parseInt(index)
      const params = {
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
          status: 1
        },
        order: [['created_at', 'DESC']]
      }

      const params1 = {
        where: {
          status: 1
        },
        order: [['readnumber', 'DESC']],
        limit: 10
      }

      let technology = await ctx.service.mysql.findAll({}, 'Technology')
      let articles = await ctx.service.mysql.findAll(params, "Article")
      let hotArticle = await ctx.service.mysql.findAll(params1, "Article")

      if(index !== 0) {
        articles = articles.filter(item => {
          return item.technologyid === index
        })
      }

      const slideshow = articles.filter(item => {
        return item.top === 1
      })

      articles = parseInt(articles.length) > end ? articles.splice(begin, end) : articles.splice(begin)
      
      ctx.status = 200
      ctx.body = {
        success: 1,
        data: {
          technology, // 标签云
          slideshow,  // banner
          articles,  // 推荐文章
          hotArticle  // 热门文章
        }
      }
    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
    
  }

  // 删除文章
  async deleteArticle() {
    const { ctx } = this
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
        const params = {
          where: {
            id,
            status: 1
          }
        }

        const article = await ctx.service.mysql.findAll(params, 'Article')

        if(article.length !== 0) {
          if(article[0].userid == userid) {
            // await ctx.service.mysql.destroy(id, 'Article')
            await article[0].update({status: 0}, params)
            ctx.status = 200
            ctx.body = {
              success: 1,
              data: '删除成功'
            }
          }
          ctx.status = 403
          ctx.body = {
            success: 1,
            data: '没有权限'
          }
        } else {
          ctx.status = 200,
          ctx.body = {
            success: 1,
            data: '文章不存在'
          }
        }
      }
    }catch(err) {
      console.log(err)
      ctx.status = 404
    }
    
  }

  // 搜索文章
  async searchArticle() {
    const { ctx, app } = this
    const { Op } = app.Sequelize
    try{
      const { title } = ctx.request.body
      const params = {
        include: [],
        where: {
          title: {
            [Op.like]: `%${title}%`
          },
          status: 1
        },
        order: [['created_at', 'DESC']],
        limit: 10
      }
      
      const articles = await ctx.service.mysql.findAll(params, 'Article')

      if(articles.length === 0) {
        ctx.status = 200
        ctx.body = {
          success: 1,
          data: '无相关内容'
        }
      }
      ctx.status = 200
      ctx.body = {
        success: 1,
        data: articles
      }

    } catch(err) {
      console.log(err)
      ctx.status = 404
    }

  }
  
}

module.exports = ArticleController;
