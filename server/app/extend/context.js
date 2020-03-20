// extends/context.js

module.exports = {
    /**
     * @param {string} key 除了时间戳，还有一个参数用于分辨是某张表，这个参数已经在配置文件定义，key是找到属性值
     * @returns 返回的是一个唯一的ID
     */
    getIdByTime(key) {
        const { app } = this
        const time = parseInt(Date.now()/1000)
        return app.config.makeId[key] + '-' + time
    }
};