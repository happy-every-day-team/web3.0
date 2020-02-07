'use strict'

module.exports = app => {
  const { DATE, STRING, BOOLEAN } = app.Sequelize
    const User = app.model.define('User', {
      id: {
        type: STRING(16),
        primaryKey: true
      },
      password: {
        type: STRING(32),
        allowNull: true
      },
      name: {
        type: STRING(16),
        allowNull: true
      },
      email: {
        type: STRING(32),
        allowNull: true
      },
      status: {
        type: BOOLEAN(4),
        allowNull: true,
        defaultValue: 0
      },
      created_at: DATE,
      updated_at: DATE
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'user'
    })
    User.associate = function() {
      app.model.User.hasMany(app.model.UserInfo, { foreignKey: 'id', targetKey: 'id' });
    }
    return User
}