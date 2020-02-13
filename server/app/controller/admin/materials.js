'use strict'
const Controller = require('egg').Controller

class backMaterialsController extends Controller {
    //教师查看指导记录
    async teacherView() {

    }
    //删除指导记录
    async teacherDeleteRecord() {

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