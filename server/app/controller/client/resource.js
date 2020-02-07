'use strict';
const Controller = require('egg').Controller;

class ResourceController extends Controller{
    async getResource(){
      // let content = this.ctx.request.body;
      //   try {
      //     let resource = await this.ctx.service.mysql.findAll({
      //       where: {
      //         status: 1
      //       }
      //     }, 'Resource');
      //     this.ctx.status = 200;
      //     if (content.length>0) {
      //       this.ctx.body = {
      //         success: 1,
      //         data: {
      //           resource
      //         }
      //       };
      //     } else {
      //       this.ctx.body = {
      //         success: 0,
      //         data: {
      //           resource
      //         }
      //       };
      //     }
      //   } catch (err) {
      //     console.log(err);
      //     ctx.status = 404;
      //   }
      let content  = await this.ctx.model.User.findAll({});
      this.ctx.body=content;
    }
    async searchResource(){
      
    }
}
module.exports = ResourceController;