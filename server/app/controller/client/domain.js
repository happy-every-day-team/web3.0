'use strict'

const Controller = require('egg').Controller;

class DomainController extends Controller {
    async getDomainInfo() {
        const { ctx } = this
        let domain = await ctx.service.mysql.findAll({}, 'Domain')
        if (domain.length !== 0) {
            ctx.status = 200
            ctx.body = {
                success: 1,
                data: domain
            }
        } else {
            ctx.status = 200
            ctx.body = {
                success: 0
            }
        }
    }
}

module.exports = DomainController;