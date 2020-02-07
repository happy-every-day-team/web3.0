'use strict'

const Controller = require('egg').Controller;

class UserInfoController extends Controller {
    async index() {
        let arr = await this.ctx.service.userInfo.findUser({})
        console.log(arr)
    }
}

module.exports = UserInfoController;