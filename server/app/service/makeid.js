'use strict'

const Service = require('egg').Service;

class MakeidService extends Service {
    async getId(param) {
        const params = { topic: 'topic', commit: 'commit' }
        let date = new Date()
        return params[param] + '-' + date
    }
}

module.exports = MakeidService;