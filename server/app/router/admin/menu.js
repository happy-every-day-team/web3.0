'use strict'

module.exports = app => {
  const { router, controller } = app;
  router.post('/menu/getMenu', controller.menu.getMenu);  // 获取文章分类
  router.post('/menu/addMenu', controller.menu.addMenu);  // 添加文章分类
  router.post('/menu/editMenu', controller.menu.editMenu);  // 修改文章分类
  router.post('/menu/delMenu', controller.menu.delMenu);  // 删除文章分类
};