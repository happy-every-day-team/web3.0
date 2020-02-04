'use strict'

module.exports = app => {
  const { INTEGER, DATE, STRING, BOOLEAN } = app.Sequelize
    const Resource = app.model.define('Resource', {
      id: {
        type: INTEGER(10),
        primaryKey: true,
        autoIncrement: true
      },
      userid: {
        type: STRING(16),
        references: {
          model: 'UserInfo',
          key: 'id',
        }
      },
      typeid: {
        type: INTEGER(10),
        references: {
          model: 'ResourceType',
          key: 'id',
        }
      },
      title: STRING(64),
      description: STRING(128),
      posterlink: STRING(128),
      link: STRING(128),
      attachment: STRING(128),
      status: {
        type: BOOLEAN(4),
        defaultValue: 1
      },
      created_at: DATE,
      updated_at: DATE
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'resource'
    })

    Resource.associate = function() {
      app.model.Resource.belongsTo(app.model.UserInfo, { foreignKey: 'userid', targetKey: 'id'})
      app.model.Resource.belongsTo(app.model.ResourceType, { foreignKey: 'typeid', targetKey: 'id'})
    }

    return Resource
}