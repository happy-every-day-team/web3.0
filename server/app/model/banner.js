'use strict'

module.exports = app => {
  const { INTEGER, STRING, BOOLEAN } = app.Sequelize
    const Banner = app.model.define('Banner', {
      id: {
        type: INTEGER(10),
        primaryKey: true,
        autoIncrement: true
      },
      link: {
        type: STRING(128)
      },
      title: {
        type: STRING(64)
      },
      description: {
        type: STRING(255)
      },
      prior: {
        type: BOOLEAN(4)
      }
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'banner'
    })

    return Banner
}