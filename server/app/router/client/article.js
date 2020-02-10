'use strict'

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/api/getArticle', controller.article.getArticle)   // 获取展示的文章
  router.get('/api/deleteArticle', controller.article.deleteArticle)   // 删除文章
  router.get('/api/searchArticle', controller.article.searchArticle)   // 搜索文章

  router.get('/api/getArticleInfo', controller.articleInfo.getArticleInfo) // 获取文章详情
  router.get('/api/collectArticle', controller.articleInfo.collectArticle) // 收藏文章
  router.get('/api/cancelArticle', controller.articleInfo.cancelArticle) // 取消收藏

  router.get('/api/getComment', controller.comment.getComment)
};