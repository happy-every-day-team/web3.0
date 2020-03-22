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
            }
        }
        let resourceList = await ctx.service.mysql.findAll(params,'Resource')
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
        const params = {
            include: [
                { model: app.model.ResourceType, attributes: ['id', 'name'] },
            ],
            where: {
                status: 1,
            }
        }
        let resourceList = await ctx.service.mysql.findAll(params,'Resource')
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
    async getResourceType(){
        let resourceType = await this.ctx.service.mysql.findAll({where:{status:1}},'ResourceType')
        this.ctx.status = 200
        if(resourceType.length !== 0){
            this.ctx.body = {
                success:1,
                data:resourceType
            }
        }else{
            this.ctx.body = {
                success:0
            }
        }
    }
}

module.exports = ResourceController;