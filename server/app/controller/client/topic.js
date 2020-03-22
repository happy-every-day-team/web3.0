'use strict'

const Controller = require('egg').Controller;

class TopicController extends Controller {
    async addTopic() {
        const { ctx } = this
        const topicId = ctx.getIdByTime('topic')
        const { topicName, description, } = ctx.params
        const id = ctx.session.userId
        const time = new Date()
        const topic = 'Topic'
        const params = {
            topic_id: topicId,
            topic_name: topicName,
            created_data: time,
            description,
            flag: 1,
            origin: id,
            modify_data: time
        }
        const media = await ctx.service.mysql.create(params, topic)
        ctx.status = 200
        ctx.body = {
            success: 1,
            data: media
        }
    }

    async updateTopic() {
        const { ctx } = this
        const { topicId, flag, appraise, selfAppraise, stage, description, file } = ctx.params
        const userId = ctx.session.userId
        const traceId = ctx.getIdByTime("topicTrace")
        const topicAdditionalFilesId = ctx.getIdByTime("topicFiles")
        const traceParam = {
            topic_trace_id: traceId,
            topic_id: topicId,
            user_id: userId,
            flag,
            appraise,
            self_appraise: selfAppraise,
        }
        const fileParam = {
            topic_additional_files_id: topicAdditionalFilesId,
            topic_trace_id: traceId,
            links: file,
            stage,
            description
        }
        // 下面用到事务处理，保证统一执行或者不执行
        let transaction;
        try {
            transaction = await this.ctx.model.transaction();
            await this.ctx.model['TopicTrace'].create(traceParam, { transaction })
            await this.ctx.model['TopicAdditionalFiles'].create(fileParam, { transaction })
            await transaction.commit();
            ctx.status = 200
            ctx.body = {
                success: 1,
                message: '更新课题成功'
            }
        } catch (error) {
            await transaction.rollback();
            ctx.status = 200
            ctx.body = {
                success: 0
            }
        }
    }

    async deleteTopic() {
        const { ctx } = this
        const { topicId } = ctx.params
        const value = {
            flag: -1
        }
        const option = {
            where: {
                topic_id: topicId,
            }
        }
        const data = await ctx.service.mysql.update(value, option, "Topic")
        if (data !== null) {
            ctx.status = 200
            ctx.body = {
                success: 1,
                message: '删除成功'
            }
        } else {
            ctx.status = 200
            ctx.body = {
                success: 0
            }
        }
    }
    async findTopicByUser() {
        const { ctx } = this
        let { userId } = ctx.params
        if (!userId) {
            userId = ctx.session.userId
        }
        const params = {
            include: [
                { model: this.app.model.TopicTrace }
            ],
            where: {
                origin: userId,
                flag: 1
            }
        }
        let topic = await ctx.service.mysql.findAll(params, 'Topic')
        if(topic)
        ctx.status = 200
        ctx.body = {
            success: 1,
            data: topic
        }
    }
    async findTopicInfo() {
        const { ctx, app } = this
        const Op = app.Sequelize.Op
        const { topicId } = ctx.params
        let trace = await ctx.service.mysql.findAll({ where: { topic_id: topicId } }, 'TopicTrace')
        let traceId = [];
        traceId = trace.map(item => {
            return item.dataValues.topic_trace_id
        })
        const params = {
            include: [
                { model: this.app.model.TopicTrace }
            ],
            where: {
                topic_trace_id: {
                    [Op.in]: traceId
                }
            }
        }
        let data = await ctx.service.mysql.findAll(params, 'TopicAdditionalFiles')
        ctx.status = 200
        ctx.body = {
            success: 1,
            data
        }
    }
}

module.exports = TopicController;