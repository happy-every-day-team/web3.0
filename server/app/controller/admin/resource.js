'use strict'
const Controller = require('egg').Controller

class backReourceController extends Controller {
  //得到资源信息
    async getResourceInfo() {
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
                    model:this.app.model.ResourceType
                }
                ],
                where:{
                    status:1
                },
                attributes:['id','title','link','attachment','created_at'],
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
                    model: this.app.model.ResourceType
                  }
                ],
                where: {
                  status: 1,
                  typeid: tagId
                },
                attributes: ['id', 'title', 'link', 'attachment', 'created_at'],
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
        const resource = await this.ctx.service.mysql.findAll(params,'Resource');
        const allResource = await this.ctx.service.mysql.findAll(params1, 'Resource');
        const total = allResource.length;
        const tag = await this.ctx.service.mysql.findAll(params2, "ResourceType");
        this.ctx.status = 200;
        this.ctx.body = {
          success: 1,
          data: {
            resource,
            total,
            tag
          }
        };
    }
    //删除
    async delResource() {
      const {id} = this.request.body;
      const resource= await this.ctx.service.mysql.findById(id,'Resource');
      await resource.update({status:0});
      if(resource.length>0){
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
    //添加资源标签
    async addResourceTag() {
      const {tagName} = this.ctx.request.body;
      const params = {
        where:{
          name:tagName
        }
      };
      const isTag = await this.ctx.service.mysql.findAll(params,"ResourceType");
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
        await this.ctx.service.mysql.create({name:tagName},'ResourceType');
        this.ctx.status=200;
        this.ctx.body={
          success:1
        }
      }

    }
    //删除资源标签
    async delResourceTag() {
      const {tagid} = this.ctx.request.body;
      const resource = await this.ctx.service.mysql.findById(tagid,'ResourceType');
      await resource.update({status:0});//把标签设置为不存在
      this.ctx.status=200;
      this.ctx.body={
        success:1,
        data:resource
      }

    }
}
module.exports = backReourceController;