'use strict';

module.exports = option => {
    return async function verify(ctx, next) {


        
        await next()
    };
};
