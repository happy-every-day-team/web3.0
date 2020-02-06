'use strict'

const Controller = require('egg').Controller;

class UserController extends Controller {
    async getUserInfo() {
        let id = this.ctx.query.id

        let user = this.service.user.getUserInfo(id)
    }
}

module.exports = UserController;