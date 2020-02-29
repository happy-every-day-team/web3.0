'use strict';

const Controller = require('egg').Controller;

class MeetController extends Controller {

  // 获取会议信息
  async getMeet() {
    const { ctx, app } = this
    try {
      const token = ctx.header.authorization;
      const author = await ctx.service.jwt.verifyToken(token);
      if (!author) {
        ctx.status = 403;
      } else {
        let { begin, end, flag } = ctx.request.body
        begin = parseInt(begin)
        end = parseInt(end)
        flag = parseInt(flag)
        const params = {
          include: [
            { model: app.model.User },
            { model: app.model.MeetLog }
          ],
          order: [['created_at', 'DESC']]
        }

        let meets = await ctx.service.mysql.findAll(params, 'Meet')

        if(flag !== 0) {
          meets = meets.filter(item => {
            return item.send_flag === 1
          })
        }

        meets = parseInt(meets.length) > end ? meets.splice(begin, end) : meets.splice(begin)

        ctx.status = 200
        ctx,body = {
          success: 1,
          data: meets
        }
      }
    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }

  // 添加会议/发布会议通知
  async addMeet() {
    const { ctx } = this
    try {
      const token = ctx.header.authorization;
      const author = await ctx.service.jwt.verifyToken(token);
      if (!author) {
        ctx.status = 403;
      } else {
        let { meet_id, created_date, start_date, end_date, address, send_flag, content, log_writer, title } = ctx.request.body
        created_date = new Date(created_date)
        start_date = new Date(start_date)
        end_date = new Date(end_date)
        send_flag == parseInt(send_flag)
        const userid = ctx.session.userid
        const params = {
          meet_id,
          created_date,
          start_date,
          end_date,
          address,
          send_flag,
          userid,
          content,
          log_writer,
          title
        }

        const meet = await ctx.service.mysql.create(params, 'Meet')
        ctx.status = 200
        ctx.body = {
          success: 1,
          data: {
            meet,
            message: '添加成功'
          }
        }
      }
    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }

  // 删除会议信息
  async deleteMeet() {
    const { ctx } = this
    try {
      const token = ctx.header.authorization;
      const author = await ctx.service.jwt.verifyToken(token);
      if (!author) {
        ctx.status = 403;
      } else {
        const { id } = ctx.request.body
        
        const meet = await ctx.service.mysql.findById(id, 'Meet')
        if(meet.length !== null) {
          await meet.update({status: 0})
          ctx.status = 200
            ctx.body = {
              success: 1,
              data: '删除成功'
            }
        } else {
          ctx.status = 200,
          ctx.body = {
            success: 1,
            data: '会议不存在'
          }
        }
      }
    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }

  // 获取会议详情
  async getMeetInfo() {
    const { ctx, app } = this
    try {
      let { id } = ctx.request.body
      id = parseInt(id)
      const params = {
        include: [
          { model: app.model.MeetLog },
          { 
            model: app.model.User,
            attributes: ['name']
          }
        ],
        where: {
          id,
          status: 1
        }
      }

      const meet = await ctx.service.mysql.findAll(params, 'Meet')

      if(meet.length === 0) {
        ctx.status = 200
        ctx.body = {
          success: 0,
          data: '会议不存在'
        }
      } else {
        ctx.status = 200
        ctx.body = {
          success: 1,
          data: meet
        }
      }
    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }
  
  // 搜索会议
  async searchMeet() {
    const { ctx, app } = this
    try {
      const { title } = ctx.request.body
      const params = {
        include: [
          {
            model: app.model.MeetLog
          }
        ],
        where: {
          title: {
            [Op.like]: `%${title}%`
          },
          status: 1
        },
        
        order: [['created_at', 'DESC']],
        limit: 10
      }

      const meet = await ctx.service.mysql.findAll(params, 'Meet')

      if(meet.length === 0) {
        ctx.status = 200
        ctx.body = {
          success: 0,
          data: '未查询到内容'
        }
      } else {
        ctx.status = 200
        ctx.body = {
          success: 1,
          body: meet
        }
      }

    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }
}

module.exports = MeetController;