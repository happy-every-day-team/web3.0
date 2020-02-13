'use strict'

module.exports = app => {
  const { router, controller } = app;

  router.post('/articleEdit/editArticle', controller.articleEdit.editArticle)   // 编辑文章
  router.post('/articleEdit/uploadArticleCover', controller.articleEdit.uploadArticleCover)   // 上传文章封面
  router.post('/articleEdit/uploadArticleInfo', controller.articleEdit.uploadArticleInfo)   // 上传文章详情
  router.post('/articleEdit/delArticleCover', controller.articleEdit.delArticleCover) // 删除文章封面
  router.post('/articleEdit/uploadArticleResource', controller.articleEdit.uploadArticleResource) // 上传文章资源
  router.get('/articleEdit/getMediaItems', controller.articleEdit.getMediaItems) // 获取媒体信息
  router.post('/articleEdit/removeMedia', controller.articleEdit.removeMedia) // 删除媒体信息

};