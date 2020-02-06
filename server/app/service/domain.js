'use strict'

const Service = require('egg').Service;

class DomainService extends Service {

    /**
     * @param {*} domain
     * @returns 成功返回true，失败返回false
     * @memberof DomainService
     */
    async InsertDomain(domain) {
        let flag = false

        return flag
    }

    /**
     * @param {*} id
     * @returns 成功返回true，失败返回false
     * @memberof DomainService
     * @description 通过id删除domain
     */
    async deleteDomain(id) {
        let flag = false

        return flag
    }

    /**
     * @param {{}} domain 
     * @returns 成功返回true，失败返回false
     * @memberof DomainService
     * @description 更新domian
     */
    async updateDomain(domain) {
        let flag = false

        return flag
    }

    /**
     * @param {*} id
     * @returns 成功返回domain，失败返回''
     * @memberof DomainService
     * @description 通过id查询domain
     */
    async findDomainById(id) {
        let domain = ''

        return domain
    }

    /**
     * @param {*} param {where:{},...}
     * @returns 成功返回domain数组，失败返回空数组
     * @memberof DomainService
     * @description 通过条件查询domian，条件为空就是查询全部
     */
    async findDomain(param) {
        let arr = []

        return arr
    }
}

module.exports = DomainService;