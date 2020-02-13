'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  
  require('./router/client/article')(app)
  require('./router/client/articleEdit')(app)
  require('./router/client/comment')(app)

  require('./router/admin/menu')(app)

};
