'use strict'
const Controller = require('egg').Controller

class backAchievementController extends Controller{
    async getAchievementInfo(){
        let { page, pageSize, tagId } = this.ctx.request.body;
        page = parseInt(page);
        pageSize = parseInt(pageSize);
        tagId = parseInt(tagId);
        let params;
        let params1;
        if (tagId === 0) {
            params = {
                include: [
                    {
                        model: this.app.model.UserInfo,
                        attributes: ['avatar'],
                        include: [{
                            model: this.app.model.User,
                            attributes: ['name']
                        }
                        ]
                    },
                {
                    model:this.app.model.AchievementType
                }
                ],
                where:{
                    status:1
                },
                attributes:['id','title','achievementlink','show','attachment','created_at'],
                order:[['created_at','DESC']],
                limit:pageSize,
                offest:(page-1)*pageSize,
            };
            params1={
                where:{
                    status:1
                }
            }
        }else{
            params = {
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
                  }, {
                    model: this.app.model.AchievementType
                  }
                ],
                where: {
                  status: 1,
                  typeid: tagId
                },
                attributes: ['id', 'title', 'achievementlink', 'show','attachment', 'created_at'],
                order: [['created_at', 'DESC']],
                limit: pageSize,
                offset: (page - 1) * pageSize,
              };
              params1 = {
                where: {
                  status: 1,
                  typeid: tagId
                }
              };
        }
        const params2 = {where:{status:1}};
        const achievement = await this.ctx.service.mysql.findAll(params,'Achievement');
        const allAchievement = await this.ctx.service.mysql.findAll(params1, 'Achievement');
        const total = allAchievement.length;
        const tag = await this.ctx.service.mysql.findAll(params2, "AchievementType");
        this.ctx.status = 200;
        this.ctx.body = {
          success: 1,
          data: {
            achievement,
            total,
            tag
          }
        };
    }
    //删除
    async delAchievement(){
        const {id} = this.request.body;
        const achievement= await this.ctx.service.mysql.findById(id,'Achievement');
        await achievement.update({status:0});
        if(achievement.length>0){
          this.ctx.status = 200;
          this.ctx.body={
            success:1,
            data:'删除成功'
          }
        }else{
          this.ctx.status = 404;
          this.ctx.body={
            success:0
          }
        }
    }
    //添加类别
    async addAchievementTag(){
        const {tagName} = this.ctx.request.body;
        const params = {
          where:{
            name:tagName
          }
        };
        const isTag = await this.ctx.service.mysql.findAll(params,"Achievement");
        if(isTag.length!==0){
          if (isTag[0].dataValues.status === 1) {
            this.ctx.status = 200;
            this.ctx.body = {
              success: 0,
              message: '标签已存在'
            };
          } else if (isTag[0].dataValues.status === 0) {
            await isTag[0].update({ status: 1 });//把标签设置为存在
            this.ctx.status = 200;
            this.ctx.body = {
              success: 1
            };
          }
        }else{
          await this.ctx.service.mysql.create({name:tagName},'AchievementType');
          this.ctx.status=200;
          this.ctx.body={
            success:1
          }
        }
  
    }
    //删除成果标签
    async delAchievementTag(){
        const {tagid} = this.ctx.request.body;
        const achievement = await this.ctx.service.mysql.findById(tagid,'AchievementType');
        await achievement.update({status:0});//把标签设置为不存在
        this.ctx.status=200;
        this.ctx.body={
          success:1,
          data:achievement
        }
    }
    //是否展示成果
    async isShow(){
          const { id, checked } = this.ctx.request.body;
          const ach = await ctx.service.mysql.findById(id, 'Achievement');
          if (checked === 'true') {
            await ach.update({ show: 1 });
          } else {
            await ach.update({ show: 0 });
          }
          this.ctx.status = 200;
          this.ctx.body = {
            success: 1
          };
        }
}
module.exports = backAchievementController;