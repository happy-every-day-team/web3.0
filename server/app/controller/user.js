'use strict'

const Controller = require('egg').Controller;

class UserController extends Controller {
    async getUserInfo() {
        try {
            let id = this.ctx.query.id
            let userinfo = await this.service.user.getUserInfo(id)
            if (userinfo.length !== 0) {
                const article = await this.service.article.getArticle()
            }

        } catch (error) {

        }

    }
}

module.exports = UserController;