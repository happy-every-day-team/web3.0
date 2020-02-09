'use strict'

const Controller = require('egg').Controller;

class MemberController extends Controller {
    async getMemberInfo() {
        const { ctx } = this
        const params = {
            include: [
                { model: this.app.model.School, attributes: ['name'] },
                { model: this.app.model.Major, attributes: ['name'] },
                { model: this.app.model.Domain, attributes: ['name'] },
                { model: this.app.model.User, attributes: ['name'] },
            ],
        }
        let member = await ctx.service.mysql.findAll(params, 'UserInfo')
        if (member !== 0) {
            ctx.status = 200
            ctx.body = {
                success: 1,
                data: member
            }
        } else {
            ctx.status = 200
            ctx.body = {
                success: 0
            }
        }
    }
}

module.exports = MemberController;