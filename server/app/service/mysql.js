'use strict'

const Service = require('egg').Service;

class MysqlService extends Service {

  // 插入数据
  async create(params, table) {
    const result = await this.ctx.model[table].create(params)
    return result
  }

  // 通过 id 查询数据
  async findById(params, table) {
    const result = await this.ctx.model[table].findByPk(params)
    return result
  }

  // 更新数据
  async update(params, option, table) {
    const result = await this.ctx.model[table].update(params, option)
    return result;
  }

  // 按条件查询
  async findAll(params, table) {
    const result = await this.ctx.model[table].findAll(params)
    return result
  }

  // 删除数据
  async destroy(params, table) {
    const result = await this.ctx.model[table].destroy(params)
    return result
  }
}

module.exports = MysqlService
