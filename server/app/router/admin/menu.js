'use strict'

module.exports = app => {
  const { router, controller } = app;
  router.post('/api/menu/getMenu', controller.menu.getMenu);  // 获取文章分类
  router.post('/api/menu/addMenu', controller.menu.addMenu);  // 添加文章分类
  router.post('/api/menu/editMenu', controller.menu.editMenu);  // 修改文章分类
  router.post('/api/menu/delMenu', controller.menu.delMenu);  // 删除文章分类
};