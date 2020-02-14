'use strict'
const Controller = require('egg').Controller

class materialsController extends Controller{
    //查看教师给自己的指导记录
    async teacherView(){
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
    async exportMaterials(){
        // const userid = this.ctx.session.userid;
        const userid='201610804032';
        const params={
            where:{userid}
        }
        const material = await this.ctx.service.mysql.findAll(params,'Achievement');
        if(material.length>0){
            this.ctx.status = 200;
            this.ctx.body={
                success:1,
                data:material
            }
        }else{
            this.ctx.status = 404;
            this.ctx.body={
                success:0
            }
        }

    }
}
module.exports = materialsController;