'use strict'
const Controller = require('egg').Controller

class achievementIssueContoller extends Controller{
    //得到成果上传页面
    async getAchievementIssue(){
     // const { id } = this.ctx.request.body
    //    const userid = this.ctx.session.userid;
       const id = 40;
       const userid = '201610804024';
       const params={
           include:[
               {
                model:this.app.model.AchievementType
               }
           ],
           where:{
               userid,
               status:2
           }
       };
       const params1={
           where:{
               id,
               userid
           }
       };
       const params2 = {
        where: {
          status: 1
        }
      };
      const AchievementType = await this.ctx.service.mysql.findAll(params2,'AchievementType');
      let achievement;
      if(id===''){
          achievement = await this.ctx.service.mysql.findAll(params,'Achievement');
      }else{
        achievement = await this.ctx.service.mysql.findAll(params1,'Achievement');
      }
      if(achievement.length>0){
          this.ctx.status=200;
          this.ctx.body = {
              success:1,
              data:{AchievementType,achievement}
          }
      }else{
          this.ctx.status=200;
          this.ctx.body={
              success:0,
              data:AchievementType
          }
      }
    }
    //上传或者更新成果
    async uploadAchievement(){
        let {id,userid,title,achievementlink,abstract,type,status,date} = this.ctx.body;
        id = parseInt(id);
        const created_at = new Date(date);
        const params = {
            userid,
            title,
            achievementlink,
            abstract,
            typeid:parseInt(type),
            status:1,
            created_at
        };
        //没有就新增，有就更新
        if(parseInt(status)===1){
            await this.ctx.service.mysql.create(params,'Achievement');
        }else{
            const achievement = this.ctx.service.mysql.findById(id,'Achievement');
            await achievement.update(params);
        }
        this.ctx.body = {
            success:1,
        }
    }
    //上传成果封面（七牛云？）
    async uploadAchievementCover(){

    }
    //删除成果封面
    async delAchievementCover(){

    }
    //上传成果附件
    async uploadAchievementAttachment(){

    }
    //删除成果附件
    async delAchievementAttachment(){

    }
}
module.exports = achievementIssueContoller;