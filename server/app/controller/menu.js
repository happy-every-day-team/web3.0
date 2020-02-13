'use strict';

const Controller = require('egg').Controller;

class MenuController extends Controller {

  // 获取文章分类
  async getMenu() {
    const { ctx, app } = this
    try{
      const token = ctx.header.authorization;
      const author = await ctx.service.jwt.verifyToken(token);
      if (!author) {
        ctx.status = 403;
      } else {
        const params = {
          include: [
            { 
              model: app.model.Article,
              attributes: ['title']
            }
          ]
        }

        const menus = await ctx.service.mysql.findAll(params, 'Menu')

        ctx.status = 200
        ctx.body = {
          success: 1,
          data: menus
        }
      }
    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }

  // 添加文章分类
  async addMenu() {
    const { ctx } = this
    try{
      const token = ctx.header.authorization;
      const author = await ctx.service.jwt.verifyToken(token);
      if (!author) {
        ctx.status = 403;
      } else {
        const { name } = ctx.request.body
        const table = 'Menu'
        const params = {
          where: {
            name,
            status: 1
          }
        } 
        const menu = await ctx.service.mysql.findAll(params, table)
        if(menu.length === 0) {
          await ctx.service.mysql.create({name, created_at: new Date()}, table)

          ctx.status = 200
          ctx.body = {
            success: 1,
            data: {
              success: 1,
              data: '修改成功'
            }
          }
        } else {
          ctx.status = 200
          ctx.body = {
            success: 0,
            data: '分类已存在'
          }
        }
      }
    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }

  // 修改文章分类
  async editMenu() {
    const { ctx } = this
    try{
      const token = ctx.header.authorization;
      const author = await ctx.service.jwt.verifyToken(token);
      if (!author) {
        ctx.status = 403;
      } else {
        const { id, name } = ctx.request.body
        id = parseInt(id)
        const table = 'Menu'
        
        const menu = await ctx.service.mysql.findById(id, table)

        if(menu !== null) {
          await menu.update({name, updated_at: new Date()})
          const result = await ctx.service.mysql.findById(id, table)
          ctx.status = 200,
          ctx.body = {
            success: 1,
            data: result
          }
        } else {
          ctx.status = 200
          ctx.body = {
            success: 0,
            data: '分类不存在'
          }
        }
      }
    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }

  // 删除文章分类
  async delMenu() {
    const { ctx } = this
    try{
      const token = ctx.header.authorization;
      const author = await ctx.service.jwt.verifyToken(token);
      if (!author) {
        ctx.status = 403;
      } else {
        const { id } = ctx.request.query
        id = parseInt(id)
        const table = 'Menu'
        
        const params = {
          where: {
            status: 1,
            id
          }
        }
        const menu = await ctx.service.mysql.findAll(params, table)

        if(menu.length !== 0) {
          await menu.update({status: 0})
          ctx.status = 200
          ctx.body = {
            success: 1,
            data: '删除成功'
          }
        } else {
          ctx.status = 200
          ctx.body = {
            success: 0,
            data: '删除失败，数据不存在'
          }
        }
      }
    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }
  
}

module.exports = MenuController;
