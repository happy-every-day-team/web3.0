'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async getHome() {

    const { ctx } = this

    try{
      const params1 = {
        attributes: []
      }

    } catch(err) {
      console.log(err)
      ctx.status = 404
    }
  }
}

module.exports = HomeController;
