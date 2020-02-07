'use strict'

module.exports = app => {
  const { STRING } = app.Sequelize
    const SequelizeMeta = app.model.define('SequelizeMeta', {
      name: {
        type: STRING(255),
        primaryKey: true,
        allowNull: false
      }
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'sequelizemeta'
    })

    return SequelizeMeta
}