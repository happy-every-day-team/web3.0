module.exports = {
  getIdByTime(key) {
    const { app } = this
    const time = parseInt(Date.now()/1000)
    return app.config.makeId[key] + '-' + time
  }
}