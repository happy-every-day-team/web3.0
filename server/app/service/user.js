'use strict'

const Service = require('egg').Service;

class UserService extends Service {
    /**
     * @param {*} user 用户
     * @returns 成功返回true，失败false
     * @memberof UserService
     * @description 登录所需要的操作
     */
    async login(user) {
        let flag = false

        return flag
    }

    /**
     * @param {*} user 用户
     * @returns 成功返回true，失败false
     * @memberof UserService
     * @description 注册所需要的操作
     */
    async register(user) {
        let flag = false


        return flag
    }

    /**
     *
     *
     * @param {*} id 用户id
     * @returns 成功返回true，失败false
     * @memberof UserService
     * @description 通过id伪删除用户
     */
    async deleteUserById(id) {
        let flag = false

        return flag
    }

    /**
     * @param {*} user  用户对象（包含id）
     * @returns 成功返回true，失败false
     * @memberof UserService
     * @description 更新用户
     */
    async updateUser(user) {
        let flag = false

        return true
    }

    /**
     * @param {*} id    用户id
     * @returns 成功返回用户，失败返回''
     * @memberof UserService
     * @description 通过id找到用户
     */
    async findUser(id) {
        let user = ''

        return user
    }
}

module.exports = UserService;