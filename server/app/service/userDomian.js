'use strict'

const Service = require('egg').Service;

class UserDomianService extends Service {

    /**
     *
     *
     * @param {*} userdomain    用户方向
     * @returns 成功返回true,失败返回false
     * @memberof UserDomianService
     * @description 插入用户方向
     */
    async InsertUserDomian(userdomain) {
        let flag = false

        return flag
    }

    /**
     *
     *
     * @param {*} id    
     * @returns 成功返回true,失败返回false
     * @memberof UserDomianService
     */
    async deleteUserDomain(id) {
        let flag = false

        return flag
    }

    /**
     *
     *
     * @param {*} userdomain    对象
     * @returns 成功返回true，失败返回false
     * @memberof UserDomianService
     */
    async updateUserDomian(userdomain) {
        let flag = false

        return flag
    }

    /**
     *
     *
     * @param {*} id    
     * @returns 成功返回userdomain,失败返回''
     * @memberof UserDomianService
     */
    async findUserDomainById(id) {
        let userdomain = ''

        return userdomain
    }

    /**
     *
     *
     * @param {*} param 可以是空对象，空对象就是全部查询，{where:{},...}
     * @returns 成功返回userdomain数组，失败返回空数组
     * @memberof UserDomianService
     * @description 条件查询
     */
    async findUserDomain(param) {
        let arr = []

        return arr
    }
}

module.exports = UserDomianService;