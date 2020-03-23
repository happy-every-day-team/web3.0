'use strict'

const Controller = require('egg').Controller;

class ResourceController extends Controller {
    async getResourceByUserId() {
        const { ctx, app } = this
        const { userId } = ctx.params

        const params = {
            include: [
                { model: app.model.ResourceType, attributes: ['id', 'name'] },
            ],
            where: {
                userid: userId,
                status: 1,
            },
            order: [["created_at", "DESC"]],
        }
        let resourceList = await ctx.service.mysql.findAll(params, 'Resource')
        if (resourceList.length !== 0) {
            this.ctx.status = 200
            this.ctx.body = {
                success: 1,
                data: resourceList
            }
        } else {
            this.ctx.status = 200
            this.ctx.body = {
                success: 0,
            }
        }
    }
    async getResource() {
        const { ctx, app } = this
        let page = 0
        let limit = 10
        // if (ctx.params['page']) {
        //     page = parseInt(ctx.params['page'])
        // }
        // if (ctx.params['limit']) {
        //     limit = parseInt(ctx.params['limit'])
        // }
        const params = {
            include: [
                { model: app.model.ResourceType, attributes: ['id', 'name'] },
                { model: app.model.UserInfo, attributes: ['avatar'] },
                { model: app.model.User, attributes: ['name'] }
            ],
            where: {
                status: 1,
            },
            order: [["created_at", "DESC"]],
            // limit,
            // offect: (page - 1) * limit
        }
        let resourceList = await ctx.service.mysql.findAll(params, 'Resource')

        if (resourceList.length !== 0) {
            this.ctx.status = 200
            this.ctx.body = {
                success: 1,
                data: resourceList
            }
        } else {
            this.ctx.status = 200
            this.ctx.body = {
                success: 0,
            }
        }
    }
    async getResourceType() {
        let resourceType = await this.ctx.service.mysql.findAll({ where: { status: 1 } }, 'ResourceType')
        this.ctx.status = 200
        if (resourceType.length !== 0) {
            this.ctx.body = {
                success: 1,
                data: resourceType
            }
        } else {
            this.ctx.body = {
                success: 0
            }
        }
    }
}

module.exports = ResourceController;



