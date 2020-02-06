'use strict'

const Service = require('egg').Service;

class TopicTeachLogService extends Service {
    /**
     * @param {*} tTLog
     * @returns 成功返回true，失败返回false
     * @memberof TopicTeachLogService
     */
    async insertTTLog(tTLog) {
        let flag = false

        return flag
    }

    /**
     * @param {*} id
     * @returns 成功返回true，失败返回false
     * @memberof TopicTeachLogService
     * @description 通过id删除 TTLog
     */
    async deleteTTLog(id) {
        let flag = false

        return flag
    }

    /**
     * @param {{}} TTLog 
     * @returns 成功返回true，失败返回false
     * @memberof TopicTeachLogService
     * @description 更新 TTLog
     */
    async updateTTLog(tTLog) {
        let flag = false

        return flag
    }

    /**
     * @param {*} id
     * @returns 成功返回TTLog，失败返回''
     * @memberof TopicTeachLogService
     * @description 通过id查询 TTLog
     */
    async findTopicFilesById(id) {
        let tTLog = ''

        return tTLog
    }

    /**
     * @param {*} param {where:{},...}
     * @returns 成功返回TTLog数组，失败返回空数组
     * @memberof TopicTeachLogService
     * @description 通过条件查询TTLog，条件为空就是查询全部
     */
    async findTTLog(param) {
        let arr = []

        return arr
    }
}

module.exports = TopicTeachLogService;