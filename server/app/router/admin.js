module.exports = app => {
    const { router, controller } = app;
    const adminauth = app.middleware.adminauth();
    // 后台资源管理接口
    router.post('/admin/backResource/getResourceInfo', controller.admin.resource.getResourceInfo);
    router.post('/admin/backResource/delResource', controller.admin.reource.delResource);// 删除资源信息
    router.post('/admin/backResource/addResourceTag', controller.admin.resource.addResourceTag);// 添加资源类别
    router.post('/admin/backResource/delResourceTag', controller.admin.resource.delResourceTag);// 删除资源类别
    // 后台成果管理接口
    router.post('/admin/backAchievement/getAchievementInfo', controller.admin.achievement.getAchievementInfo);// 获取成果信息
    router.post('/admin/backAchievement/delAchievement', controller.admin.achievement.delAchievement);// 删除成果
    router.post('/admin/backAchievement/addAchievementTag', controller.admin.achievement.addAchievementTag);// 添加成果类别
    router.post('/admin/backAchievement/delAchievementTag', controller.admin.achievement.delAchievementTag);// 删除成果类别
    router.post('/admin/backAchievement/isShow', controller.admin.achievement.isShow);// 是否展示成果
    //材料生成中心
    // router.post('/admin/backMaterials/teacherView', controller.admin.materials.teacherView);// 教师查看指导记录
    // router.post('/admin/backMaterials/teacherDeleteRecord', controller.admin.materials.teacherDeleteRecord);// 教师删除指导记录
    // router.post('/admin/backMaterials/showUserAchievement', controller.admin.materials.showUserAchievement);// 展示用户成果
    router.post('/admin/backMaterials/exportMaterials', controller.admin.materials.exportMaterials);// 个人材料导出

}