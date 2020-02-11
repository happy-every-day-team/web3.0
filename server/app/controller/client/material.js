'use strict'
const Controller = require('egg').Controller

class materialsController extends Controller{
    async teacherView(){

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