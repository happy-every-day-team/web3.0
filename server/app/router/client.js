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

    //成员管理
    router.get("/member/getMemberInfo", controller.client.member.getMemberInfo)
    router.get("/member/getDomainInfo", controller.client.domain.getDomainInfo)


};
