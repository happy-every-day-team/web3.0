'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {

  // 获取所有评论
  async getAllComment() {
    const { ctx, app } = this
    try{
      const token = ctx.header.authorization;
      const author = await ctx.service.jwt.verifyToken(token);
      if (!author) {
        ctx.status = 403;
      } else {

        let { begin, end } = ctx.request.body
        // let begin = 0
        // let end = 15
        begin = parseInt(begin)
        end = parseInt(end)
      
        const params = {
          include: [
            {
              model: app.model.UserInfo,
              attributes: ['avatar'],
              include: [
                {
                  model: app.model.User,
                  attributes: ['name']
                }
              ]
            },
            {
              model: app.model.Article,
              attributes: ['title']
            }
          ],
          order: [['article_id', 'DESC']]
        }
        const comments = await ctx.service.mysql.findAll(params, 'Comment')

        comments = parseInt(comments.length) > end ? comments.splice(begin, end) : comments.splice(begin)

        if(comments.length === 0) {
          ctx.status = 200
          ctx.body = {
            success: 0,
            data: '暂无评论'
          }
        } else {
          ctx.status = 200
          ctx.body = {
            success: 1,
            data: comments
          }
        }
      }
    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }

  // 获取对应文章的评论
  async getComment() {
    const { ctx, app } = this
    try{
      const { id } = ctx.request.body
      const table = 'Comment'
      const params = {
        include: [
          {
            model: app.model.UserInfo,
            attributes: ['avatar'],
            include: [
              {
                model: app.model.User,
                attributes: ['name']
              }
            ]
          },
          {
            model: app.model.Article,
            attributes: ['title']
          }
        ],
        where: {
          article_id: id,
          status: 1
        }
      }
      const comment = await ctx.service.mysql.findAll(params, table)

      if(comment.length === 0) {
        ctx.status = 200
        ctx.body = {
          success: 0,
          data: '暂无评论'
        }
      } else {
        ctx.status = 200
        ctx.body = {
          success: 1,
          data: comment
        }
      }
    }catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }

  // 添加评论
  async addComment() {
    const { ctx } = this
    try{
      const token = ctx.header.authorization;
      const author = await ctx.service.jwt.verifyToken(token);
      if (!author) {
        ctx.status = 403;
      } else {
        const { content, user_id, article_id, fathercomment_id } = ctx.request.body
        const params = {
          content,
          user_id,
          article_id,
          fathercomment_id,
          created_at: new Date(),
        }
        const comment = await ctx.service.mysql.create(params, 'Comment')
        ctx.status = 200
        ctx.body = {
          success: 1,
          data: comment
        }
      }
    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }

  // 删除评论
  async delComment() {
    const { ctx } = this
    try{
      const token = ctx.header.authorization;
      const author = await ctx.service.jwt.verifyToken(token);
      if (!author) {
        ctx.status = 403;
      } else {
        const { id } = ctx.request.body
        const table = 'Comment'
        const comment = await ctx.service.mysql.findById(id, table)

        if(comment !== null) {
          await comment.update({status: 0})
          ctx.status = 200
          ctx.body = {
            success: 1,
            data: '删除成功'
          }
        } else {
          ctx.status = 200
          ctx.body = {
            success: 0,
            data: '删除失败'
          }
        }
      }
    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }
}

module.exports = ArticleController;
