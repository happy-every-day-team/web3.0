'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize
  const Domain = app.model.define('Domain', {
    id: {
      type: INTEGER(10),
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: STRING(16),
      allowNull: false
    },
    created_at: DATE,
    updated_at: DATE
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'domain'
  })
  Domain.associate = function () {
    app.model.Domain.hasMany(app.model.UserInfo, { foreignKey: 'domain', targetKey: 'id' });
  }
  return Domain
}