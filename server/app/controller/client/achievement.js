'use strict'
const Controller = require('egg').Controller

class achievementContoller extends Controller{
    async getAchievement(){
        const table = 'AchievementType';
        const table1 = 'Achievement';
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
        const params1 = {
          where: {
            status: 1
          }
        };
        let achievementType = await this.ctx.service.mysql.findAll(params1, table);
        let achievement = await this.ctx.service.mysql.findAll(params, table1);
        this.ctx.status = 200;
        if (achievement.length > 0) {
          this.ctx.body = {
            success: 1,
            data: {
                achievementType,
              achievement
            }
          }
        } else {
          this.ctx.body = {
            success: 0,
            data: {
                achievementType,
                achievement
            }
          }
        }
    }
    async searchAchievement(){
        const Op = this.app.Sequelize.Op;
    // const value = this.ctx.request.body;
    const value = 'Java的打字母游戏设计';
    const params = {
      include: [{
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
        title: {
          [Op.like]: '%' + value + '%',
        },
      },
    };
    let achievement = await this.ctx.service.mysql.findAll(params, 'Achievement');
    this.ctx.status = 200;
    if (achievement.length > 0) {
      this.ctx.body = {
        success: 1,
        data: {
            achievement
        }
      }
    } else {
      this.ctx.body = {
        success: 0,
        data: '成果不存在'
      }
    }

  }
}
module.exports = achievementContoller;