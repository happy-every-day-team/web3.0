'use strict'

const Service = require('egg').Service;

class UserInfoService extends Service {

    /**
     * @param {*} param 一个用户信息对象
     * @returns 成功返回true，失败false
     * @memberof UserInfoService
     * @description 插入用户信息
     */
    async insertUserInfo(param) {
        let flag = false

        return flag
    }

    /**
     * @param {*} id    用户id
     * @returns 成功返回true，失败false
     * @memberof UserInfoService
     * @description     伪删除用户
     */
    async deleteUserInfo(id) {
        let flag = false

        return flag
    }

    /**
     * @param {*} id    用户id
     * @returns 成功返回true，失败false
     * @memberof UserInfoService
     * @description 修改用户信息,成功返回true，失败返回false
     */
    async updateUserInfo(id) {
        let flag = false

        return flag
    }

    /**
     *
     *
     * @param {*} id    用户id
     * @returns 成功返回用户信息，失败返回空
     * @memberof UserInfoService
     */
    async findUserInfoById(id) {
        let userInfo = ''
        
        return userInfo
    }

    /**
     *
     *
     * @param {*} param 条件查询的条件{where:{},limit:value,offset:value}
     * @returns 成功返回一个有数据的数组，失败返回一个空数组
     * @memberof UserInfoService
     * @description 便于各种条件查询
     */
    async findUser(param){
        let arr = []
        arr = await this.ctx.service.mysql.findAll(param,'userInfo')
        return arr
    }





}

module.exports = UserInfoService;