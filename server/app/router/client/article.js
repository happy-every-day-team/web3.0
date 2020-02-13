'use strict'

module.exports = app => {
  const { router, controller } = app;

  router.post('/article/getArticle', controller.article.getArticle)   // 获取文章
  router.post('/article/deleteArticle', controller.article.deleteArticle)   // 删除文章
  router.post('/article/searchArticle', controller.article.searchArticle)   // 搜索文章
  router.post('/article/getArticleInfo/:id', controller.articleInfo.getArticleInfo) // 获取文章详情
  router.post('/article/collectArticle', controller.articleInfo.collectArticle) // 收藏文章
  router.post('/article/cancelArticle', controller.articleInfo.cancelArticle) // 取消收藏

};