'use strict'

module.exports = app => {
  const { router, controller } = app;
  router.post('/comment/getAllComment', controller.comment.getAllComment);  // 获取所有评论
  router.post('/comment/getComment', controller.comment.getComment);  // 获取对应文章的评论
  router.post('/comment/addComment', controller.comment.addComment);  // 添加评论
  router.post('/comment/delComment', controller.comment.delComment);  // 删除评论
};