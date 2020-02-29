'use strict'

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home .getHome);  // 获取首页信息
};