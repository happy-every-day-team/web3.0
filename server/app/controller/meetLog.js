'use strict';

const Controller = require('egg').Controller;

class MeetLogController extends Controller {

  // 获取会议记录
  async getMeetLog() {
    const { ctx } = this
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
            { 
              model: app.model.Meet,
              attributes: ['title']
            }
          ],
          order: [['created_at', 'DESC']]
        }

        meetLogs = await ctx.service.mysql.findAll(params, 'MeetLog')
        meetLogs = parseInt(meetLogs.length) > end ? meetLogs.splice(begin, end) : meetLogs.splice(begin)

        ctx.status = 200
        ctx.body = {
          success: 1,
          data: meetLogs
        }
      }
    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }

  // 添加会议记录
  async addMeetLog() {
    const { ctx } = this
    try {

    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }

  // 上传会议记录附件
  async uploadMeetLogAttachment() {
    const { ctx } = this
    try {

    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }

  // 删除会议记录附件
  async delMeetLogAttachment() {
    const { ctx } = this
    try {

    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }

  // 修改会议记录
  async editMeetLog() {
    const { ctx } = this
    try {

    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }

  // 上传会议记录封面
  async uploadMeetLogCover() {
    const { ctx } = this
    try {

    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }

  // 删除会议记录封面
  async delMeetLogCover() {
    const { ctx } = this
    try {

    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }
}

module.exports = MeetLogController;
