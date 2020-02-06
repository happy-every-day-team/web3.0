'use strict'

const Service = require('egg').Service;

class TopicAdditionalFilesService extends Service {
    /**
     * @param {*} domain
     * @returns 成功返回true，失败返回false
     * @memberof TopicAdditionalFilesService
     */
    async insertTopicFiles(topicFiles) {
        let flag = false

        return flag
    }

    /**
     * @param {*} id
     * @returns 成功返回true，失败返回false
     * @memberof TopicAdditionalFilesService
     * @description 通过id删除 topicFiles
     */
    async deleteTopicFiles(id) {
        let flag = false

        return flag
    }

    /**
     * @param {{}} topicFiles 
     * @returns 成功返回true，失败返回false
     * @memberof TopicAdditionalFilesService
     * @description 更新 topicFiles
     */
    async updateTopicFiles(topicFiles) {
        let flag = false

        return flag
    }

    /**
     * @param {*} id
     * @returns 成功返回topicFiles，失败返回''
     * @memberof TopicAdditionalFilesService
     * @description 通过id查询 topicFiles
     */
    async findTopicFilesById(id) {
        let topicFiles = ''

        return topicFiles
    }

    /**
     * @param {*} param {where:{},...}
     * @returns 成功返回files数组，失败返回空数组
     * @memberof TopicAdditionalFilesService
     * @description 通过条件查询topicFiles，条件为空就是查询全部
     */
    async findTopicFiles(param) {
        let arr = []

        return arr
    }

}

module.exports = TopicAdditionalFilesService;