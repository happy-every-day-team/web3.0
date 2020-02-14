'use strict'
const Controller = require('egg').Controller

class backMaterialsController extends Controller {
    //教师查看指导记录
    async teacherView() {
        const {topId}=this.ctx.request.body;
        const params={
            include:[
                {
                    model:this.app.model.TopicTrace,
                    attributes: ['topic_trace_id'],
                    include:[{
                        model:this.app.model.Topic,
                        attributes:['topic_name']
                    }]
                }
            ],
            order:[['teach_date','DESC']],
            where:{
                topId
            }
        }
        const teachLog = await this.app.service.mysql.findAll(params,'TopicTeachLog');
        if(teachLog.length>0){
            this.ctx.status=200;
            this.ctx.body={
                success:1,
                data:teachLog
            }
        }else{
            this.ctx.status=404;
            this.ctx.body={
                success:0
            }
        }
    }
    //删除指导记录
    async teacherDeleteRecord() {
        const {logId} =this.ctx.request.body;
        const params = {
            where:{logId}
        } 
        const delLog = await this.ctx.service.mysql.findById(params,'TopicTeachLog');
        this.ctx.status=200;
        this.ctx.body = {
            success:1,
            data:'删除指导记录成功'
        }
    }
    //展示用户成果
    async showUserAchievement() {
        const params = {
            include: [
                {
                    model: this.app.model.UserInfo,
                    attributes: ['avatar'],
                    include: [
                        {
                            model: this.app.model.User,
                            attributes: ['name']
                        }
                    ]
                }
            ],
            order: [['created_at', 'DESC']],
            where: {
                status: 1
            }
        };
        let achievement = await this.ctx.service.mysql.findAll(params, 'Achievement');
        if (achievement.length > 0) {
            this.ctx.status = 200;
            this.ctx.body = {
                success: 1,
                data: {
                    achievement
                }
            }
        } else {
            this.ctx.status = 404;
            this.ctx.body = {
                success: 0
            }
        }
    }
    //导出材料
    async exportMaterials() {
        // const userid = this.ctx.session.userid;
        const userid = '201610804032';
        const params = {
            where: { userid }
        }
        const material = await this.ctx.service.mysql.findAll(params, 'Achievement');
        if (material.length > 0) {
            this.ctx.status = 200;
            this.ctx.body = {
                success: 1,
                data: material
            }
        } else {
            this.ctx.status = 404;
            this.ctx.body = {
                success: 0
            }
        }

    }
}
module.exports = backMaterialsController;