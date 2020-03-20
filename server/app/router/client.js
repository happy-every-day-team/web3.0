'use strict';

/**
 * @param {Egg.Application} app - egg application
 */


module.exports = app => {
    const { router, controller } = app;
    // 个人主页
    router.get('/user/getUserInfo/:id', controller.client.userInfo.getUserInfo)
    router.get('/user/getOtherInfo/:id', controller.client.userInfo.getOtherInfo)

    router.post('/user/changeUserInfo', controller.client.userInfo.EditUserInfo)

    // 成员管理
    router.get("/member/getMemberInfo", controller.client.member.getMemberInfo)
    router.get("/member/getDomainInfo", controller.client.domain.getDomainInfo)

    // 课题管理
    router.get("/topic/delTopic/:topicId", controller.client.topic.deleteTopic)
    router.get("/topic/getTopicInfo/:topicId", controller.client.topic.findTopicInfo)
    router.get("/topic/getTopic",controller.client.topic.findTopicByUser)

    router.post("/topic/apply", controller.client.topic.addTopic)
    router.post("/topic/update", controller.client.topic.updateTopic)


};
