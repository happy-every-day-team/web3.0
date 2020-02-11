/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1580301877706_9738';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  //sequelize使用
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '123456',
    port: 3306,
    database: 'pzhuweb',
  }
  // 七牛云秘钥
  config.qiniuKey = {
    accessKey: '05R74ylMRB--twen8uGQPIvGtcQoj2lsH0Ay1dDd',
    secretKey: 'SswzXtqs_u7KYIBY_fSrNjhe3Afy_ZXfGMGOcYHX'
  };
  return {
    ...config,
    ...userConfig,
  };
};
