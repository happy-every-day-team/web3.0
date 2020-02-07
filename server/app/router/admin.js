module.exports = app => {
    const { router, controller } = app;
    const adminauth = app.middleware.adminauth();
    // 后台资源管理接口
    // router.post('/admin/resource/getResourceInfo', controller.backResource.getResourceInfo);
    // router.post('/admin/resource/delResource', controller.backResource.delResource);// 删除资源信息
    // router.post('/admin/resource/addResourceTag', controller.backResource.addResourceTag);// 添加资源类别
    // router.post('/admin/resource/delResourceTag', controller.backResource.delResourceTag);// 删除资源类别
    // router.post('/admin/resource/onSerachResource', controller.backResource.onSerachResource);// 搜索资源信息
    // // 后台成果管理接口
    // router.post('/admin/achievement/getAchievementInfo', controller.backAchievement.getAchievementInfo);// 获取成果信息
    // router.post('/admin/achievement/delAchievement', controller.backAchievement.delAchievement);// 删除成果
    // router.post('/admin/achievement/addAchievementTag', controller.backAchievement.addAchievementTag);// 添加成果类别
    // router.post('/admin/achievement/delAchievementTag', controller.backAchievement.delAchievementTag);// 删除成果类别
    // router.post('/admin/achievement/onSerachAchievement', controller.backAchievement.onSerachAchievement);// 搜索成果
    // router.post('/admin/achievement/isShow', controller.backAchievement.isShow);// 是否展示成果
    // //材料生成中心
    // router.post('/admin/materials/teacherView', controller.backMaterials.teacherView);// 教师查看指导记录
    // router.post('/admin/materials/teacherDeleteRecord', controller.backMaterials.teacherDeleteRecord);// 教师删除指导记录
    // router.post('/admin/materials/showUserAchievement', controller.backMaterials.showUserAchievement);// 展示用户成果
    // router.post('/admin/materials/exportMaterials', controller.backMaterials.exportMaterials);// 个人材料导出

}