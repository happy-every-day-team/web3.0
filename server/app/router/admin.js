'use strict';

/**
 * @param {Egg.Application} app - egg application
 */


module.exports = app => {
    const { router, controller } = app;
    router.get('/user/getUserInfo/:id', controller.client.userInfo.getUserInfo)
    router.get('/user/getOtherInfo', controller.client.userInfo.getOtherInfo)

    router.post('/user/changeUserInfo', controller.client.userInfo.EditUserInfo)


};
