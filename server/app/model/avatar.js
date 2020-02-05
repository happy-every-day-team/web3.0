'use strict'

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize
    const Avatar = app.model.define('Avatar', {
      id: {
        type: INTEGER(10),
        primaryKey: true,
        autoIncrement: true
      },
      link: {
        type: STRING(128),
        allowNull: false
      }
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'avatar'
    })

    return Avatar
}