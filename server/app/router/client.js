module.exports = app => {
    const { router, controller } = app;
    const adminauth = app.middleware.adminauth();
    //测试
    router.get('/client/index', controller.client.home.index);
    资源分享界面的接口
    router.get('/client/resource/getResource', controller.client.resource.getResource); // 获取资源列表
    router.get('/client/resource/searchResource', controller.client.resource.searchResource); // 搜索资源
    // 成果展示界面的接口
    router.get('/client/achievement/getAchievement', controller.client.achievement.getAchievement); // 获取成果展示界面的接口
    router.get('/client/achievement/searchAchievement', controller.client.achievement.searchAchievement); // 搜索成果资源
    //资源发布接口
    // router.post('/client/resourceIssue/getResourceIssue', controller.resourceIssue.getResourceIssue); // 获取资源发布界面的信息
    // router.post('/client/resourceIssue/uploadResource', controller.resourceIssue.uploadResource); // 上传发布资源
    // router.post('/client/resourceIssue/uploadResourceCover', controller.resourceIssue.uploadResourceCover); // 上传封面图片
    // router.post('/client/resourceIssue/delResourceCover', controller.resourceIssue.delResourceCover); // 删除资源封面图片
    // router.post('/client/resourceIssue/uploadResourceAttachment', controller.resourceIssue.uploadResourceAttachment); // 上传资源附件
    // router.post('/client/resourceIssue/delResourceAttachment', controller.resourceIssue.delResourceAttachment); // 删除附加
    // // 成果发布接口
    // router.post('/client/achievementIssue/getAchievementIssue', controller.achievementIssue.getAchievementIssue); // 获取成果发布界面的信息
    // router.post('/client/achievementIssue/uploadAchievement', controller.achievementIssue.uploadAchievement); // 上传成果发布资源
    // router.post('/client/achievementIssue/uploadAchievementCover', controller.achievementIssue.uploadAchievementCover); // 上传成果封面图片
    // router.post('/client/achievementIssue/delAchievementCover', controller.achievementIssue.delAchievementCover); // 删除资源封面图片
    // router.post('/client/achievementIssue/uploadAchievementAttachment', controller.achievementIssue.uploadAchievementAttachment); // 上传资源附件
    // router.post('/client/achievementIssue/delAchievementAttachment', controller.achievementIssue.delAchievementAttachment); // 删除附加
    // //材料生成中心
    // router.post('/client/user/getUserInfo', controller.user.getUserInfo); // 获取成员基本信息生成表格
    // router.post('/client/personal/teacherView', controller.personal.teacherView); // 查看教师给自己的指导记录
    // router.post('/client/achievement/getAchievement', controller.personal.teacherView); // 获取用户成果
    // router.post('/client/personal/exportMaterials', controller.personal.exportMaterials); // 个人成果材料导出



    

}