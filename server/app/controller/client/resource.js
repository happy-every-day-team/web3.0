'use strict';
const Controller = require('egg').Controller;

class ResourceController extends Controller {
  //得到资源并展示
  async getResource() {
    const table = 'ResourceType';
    const table1 = 'Resource';
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
    let resourceType = await this.ctx.service.mysql.findAll(params1, table);
    let resource = await this.ctx.service.mysql.findAll(params, table1);
    this.ctx.status = 200;
    if (resource.length > 0) {
      this.ctx.body = {
        success: 1,
        data: {
          resourceType,
          resource
        }
      }
    } else {
      this.ctx.body = {
        success: 0,
        data: {
          resourceType,
          resource
        }
      }
    }
  }
  //模糊查询资源
  async searchResource() {
    const Op = this.app.Sequelize.Op;
    // const value = this.ctx.request.body;
    const value = '数据结构微信文章';
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
    let resource = await this.ctx.service.mysql.findAll(params, 'Resource');
    this.ctx.status = 200;
    if (resource.length > 0) {
      this.ctx.body = {
        success: 1,
        data: {
          resource
        }
      }
    } else {
      this.ctx.body = {
        success: 0,
        data: '资源不存在'
      }
    }

  }
}
module.exports = ResourceController;