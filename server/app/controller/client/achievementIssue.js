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
        let {id,userid,key,status} = thix.ctx.request.body;
        id = parseInt(id);
        const posterlink = await this.ctx.service.qiniu.getCDN(key);
        const params = {
            userid,
            posterlink,
            status:2
        };
        let achievement;
        if (parseInt(status) === 1) {
         achievement = await this.ctx.service.mysql.create(params, 'Achievement');
       } else {
        achievement = await this.ctx.service.mysql.findById(id, 'Achievement');
         await achievement.update(params);
       }
       this.ctx.status = 200;
       if(achievement.length>0){
        this.ctx.body = {
            success: 1,
            data: achievement
          };  
       }else{
           this.ctx.status=404;
       }
       
    }
    //删除成果封面
    async delAchievementCover(){
        const {id,posterlink} = this.ctx.request.body;
        const array = posterlink.split('/');
        const key = array[array.length-1];
        const params = {
            posterlink:''
        };
        const achievement = await this.ctx.service.mysql.findById(id,'Achievement');
        await achievement.update(params);
        await this.ctx.service.qiniu.deleteFile('images',key)//?
        if(achievement.length>0){
            this.ctx.status = 200;
            this.ctx.body = {
                success:1
            }
        }else{
            this.ctx.status=404;
        }
      
    }
    //上传成果附件
    async uploadAchievementAttachment(){
        let { id, userid, key, status } = this.ctx.request.body;
        id = parseInt(id);
        const attachment = await this.ctx.service.qiniu.getCDN(key);
        const params = {
          userid,
          attachment,
          status: 2
        };
        let achievement;
        if (parseInt(status) === 1) {
            achievement = await this.ctx.service.mysql.create(params, 'Achievement');
        } else {
            achievement = await this.ctx.service.mysql.findById(id, 'Achievement');
          await achievement.update(params);
        }
        this.ctx.status = 200;
        this.ctx.body = {
          success: 1,
          data: achievement
        };
    }
    //删除成果附件
    async delAchievementAttachment(){
        const {id,attachment} = this.ctx.request.body;
        const array = attachment.split('/');
        const key = array[array.length-1];
        const params = {
            attachment:''
        };
        const achievement = await this.ctx.service.mysql.findById(id,"Achievement");
        await achievement.update(params);
        await this.ctx.service.mysql.deleteFile('images',key);
        this.ctx.status = 200;
        if(achievement.length>0){
            this.ctx.body = {
                success:1
            }
        }else{
            this.ctx.status=404;
        }
       
    }
}
module.exports = achievementIssueContoller;