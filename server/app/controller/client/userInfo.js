'use strict'

const Controller = require('egg').Controller;

class UserInfoController extends Controller {
    // 获得用户基本信息（头像，名字，电话，研究方向，个性标签、学院专业）（get） 通过id获取用户
    async getUserInfo() {
        let id = this.ctx.params.id
        const table = 'UserInfo'
        const params = {
            include: [
                { model: this.app.model.School, attributes: ['name'] },
                { model: this.app.model.Major, attributes: ['name'] },
                { model: this.app.model.Domain, attributes: ['name'] },
                { model: this.app.model.User, attributes: ['name'] },
            ],
            where: {
                id,
            }
        }
        let userInfo = await this.ctx.service.mysql.findAll(params, table)
        if (userInfo.length !== 0) {
            userInfo = userInfo[0].dataValues
            this.ctx.status = 200
            this.ctx.body = {
                success: 1,
                data: userInfo
            }
        } else {
            this.ctx.status = 200
            this.ctx.body = {
                success: 0,
            }
        }
    }
    async EditUserInfo() {
        const { ctx } = this
        const { id, school, major, domain, avator, phone, description, isCDN } = ctx.params
        const userInfo = 'UserInfo'
        const isUser = await ctx.service.mysql.findById(id, userInfo)
        if (isUser === null) {
            ctx.status = 200
            ctx.body = {
                success: 0,
                message: '账号不存在'
            }
        } else {
            let cdn
            if (isCDN) {
                cdn = await ctx.service.quniu.getCDN(avator)
            } else {
                cdn = avator
            }
        }
        const value = { school, major, domain, phone, description, avator: cdn }
        const url = isUser.dataValues.avator
        const urlArr = url.split('/')
        const key = arr[3]
        if (key !== 'avatar' && url !== cdn){
            await ctx.service.quniu.deleteFile('')
        }

    }
    async getOtherInfo() {
        const { ctx } = this
        const id = ctx.params.id
        let otherInfo = {}
        const usert = 'User'
        const articlet = 'Article'
        const achievementt = 'Achievement'
        const resourcet = 'Resource'
        const favoritet = 'Favorite'
        const userInfot = 'UserInfo'
        const user = await ctx.service.mysql.findById(id, usert)
        if (user) {
            let readNum = 0
            const article = await ctx.service.mysql.findAll({ where: { userid: id, status: 1 } }, articlet)
            otherInfo.articleNum = article.length
            if (otherInfo.articleNum !== 0) {
                readNum = article.map(item => {
                    return item.dataValues.readnumber
                })
                readNum = readNum.reduce((total, currentValue) => {
                    return total + currentValue;
                });
            }
            otherInfo.readNum = readNum
            const achievement = await ctx.service.mysql.findAll({ where: { userid: id, status: 1 } }, achievementt)
            otherInfo.achievementNum = achievement.length
            const resource = await ctx.service.mysql.findAll({ where: { userid: id, status: 1 } }, resourcet)
            otherInfo.resourceNum = resource.length
            const favorite = await ctx.service.mysql.findAll({ where: { userid: id } }, favoritet)
            otherInfo.favoriteNum = favorite.length

            ctx.status = 200
            ctx.body = {
                success: 1,
                data: otherInfo
            }
        } else {
            ctx.status = 200
            ctx.body = {
                success: 0
            }
        }

    }
}

module.exports = UserInfoController;