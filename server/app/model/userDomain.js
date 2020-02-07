'use strict'

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize
    const UserDomain = app.model.define('UserDomain', {
      id: {
        type: INTEGER(10),
        primaryKey: true,
        autoIncrement: true
      },
      userid: {
        type: STRING(16),
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        }
      },
      domainid: {
        type: INTEGER(10),
        allowNull: false,
        references: {
          model: 'Domain',
          key: 'id',
        }
      }
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'user_domain'
    })

    UserDomain.associate = function() {
      app.model.UserDomain.belongsTo(app.model.User, { foreignKey: 'userid', targetKey: 'id'})
      app.model.UserDomain.belongsTo(app.model.Domain, { foreignKey: 'domainid', targetKey: 'id'})
    }

    return UserDomain
}