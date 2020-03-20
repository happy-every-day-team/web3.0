'use strict';

module.exports = option => {
    return async function verify(ctx, next) {
        ctx.session.userId = '201710803017'


        await next()
    };
};
