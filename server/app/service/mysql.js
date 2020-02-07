'use strict';
const Service = require('egg').Service;
class MySqlService extends Service {
  // 插入数据
  async create(params, table) {
    const { ctx } = this;
    const result = await ctx.model[table].create(params);
    return result;
  }
  // 通过ID查找数据
  async findById(params, table) {
    const { ctx } = this;
    const result = await ctx.model[table].findById(params);
    return result;
  }
  // 条件查询
  async findAll(params, table) {
    const { ctx } = this;
    const result = await ctx.model[table].findAll(params);
    return result;
  }



  // 通过ID删除数据
  async deleteById(params, table) {
    const result = await this.ctx.model[table].destroy(params)
    return result;
  }
}

module.exports = MySqlService;
