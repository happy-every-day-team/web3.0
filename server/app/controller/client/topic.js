'use strict'

const Controller = require('egg').Controller;

class TopicController extends Controller {
    async addTopic() {
        const { ctx } = this
        const id = await ctx.service.makeid.getId('topic')
        const {topicName,description,}
    }
}

module.exports = TopicController;