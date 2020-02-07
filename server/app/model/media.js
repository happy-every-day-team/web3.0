'use strict'

module.exports = app => {
  const { INTEGER, STRING, BOOLEAN } = app.Sequelize
    const Media = app.model.define('Media', {
      id: {
        type: INTEGER(10),
        primaryKey: true,
        autoIncrement: true
      },
      userid: {
        type: STRING(16),
        references: {
          model: 'UserInfo',
          key: 'id'
        }
      },
      articleid: {
        type: INTEGER(10),
        references: {
          model: 'Article',
          key: 'id'
        }
      },
      link: STRING(255),
      key: STRING(128),
      status: {
        type: BOOLEAN(4),
        defaultValue: 1
      }
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'media'
    })

    Media.associate = function() {
      app.model.Media.belongsTo(app.model.UserInfo, { foreignKey: 'userid', targetKey: 'id'})
      app.model.Media.belongsTo(app.model.Article, { foreignKey: 'articleid', targetKey: 'id'})
    }

    return Media
}