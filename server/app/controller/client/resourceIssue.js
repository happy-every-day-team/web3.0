'use strict'
const Controller = require('egg').Controller

class resourceContoller extends Controller{
    //获得资源发布页信息
    async getResourceIssue(){
        // const { id } = this.ctx.request.body
    //    const userid = this.ctx.session.userid;
    const id = 40;
       const userid = '201610804032';
       const params={
           include:[
               {
                model:this.app.model.ResourceType
               }
           ],
           where:{
               userid,
               status:1
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
      const ResourceType = await this.ctx.service.mysql.findAll(params2,'ResourceType');
      let resource;
      if(id===''){
          resource = await this.ctx.service.mysql.findAll(params,'Resource');
      }else{
          resource = await this.ctx.service.mysql.findAll(params1,'Resource');
      }
      if(resource.length>0){
          this.ctx.status=200;
          this.ctx.body = {
              success:1,
              data:{ResourceType,resource}
          }
      }else{
          this.ctx.status=200;
          this.ctx.body={
              success:0,
              data:ResourceType
          }
      }
}
    //上传资源
    async uploadResource(){
        let {id,userid,title,link,description,type,status,date} = this.ctx.body;
        id = parseInt(id);
        const created_at = new Date(date);
        const params = {
            userid,
            title,
            link,
            typeid:parseInt(type),
            description,
            status:1,
            created_at
        };
        //没有就新增，有就更新
        if(parseInt(status)===1){
            await this.ctx.service.mysql.create(params,'Resource');
        }else{
            const resource = this.ctx.service.mysql.findById(id,'Resource');
            await resource.update(params);
        }
        this.ctx.body = {
            success:1,
        }
    }
    //上传资源封面（需要使用七牛云？）
    async uploadResourceCover(){

    }
    //删除资源封面
    async delResourceCover(){

    }
    //上传资源附件
    async uploadResourceAttachment(){

    }
    //删除资源附件
    async delResourceAttachment(){

    }
}
module.exports = resourceContoller;