'use strict'

const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
        try {
            let arr = await this.ctx.service.mysql.findAll({ where: { id: '201710803017', status: 1 }},'User')
        console.log(arr)

        } catch (error) {
            console.log(error)
        }

    }
}

module.exports = UserController;