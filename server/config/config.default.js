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
   // 七牛云秘钥
   config.qiniuKey = {
    accessKey: 'RQPDrNQ4aoOWEn_3rMg9xH273n5NuGXizE-JhbOv',
    secretKey: 'MalqHu1GWMf3TXFZM_QrMgIdm76IVETBZ3nmTrEv'
  };

  // 数据库配置
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '123456',
    port: 3306,
    database: 'pzhuweb',
  }

  // token鉴权秘钥
  config.token = 'webJWT';

  // 配置session
  config.session = {
    key: 'SESSION_ID', // key名字
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    encrypt: true, // 加密
    renew: true // 最大时间范围内，刷新，自动增加最大时间
  };

  config.cors = {
    credentials: true
  };

  config.makeId = {
    topic: 'topic',
    mac: 'sss'
  }

  // 安全配置
  config.security = {
    csrf: {
      enable: false
    }
  }

  // 配置模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
