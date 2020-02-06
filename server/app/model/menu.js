'use strict'

module.exports = app => {
  const { INTEGER, DATE, STRING } = app.Sequelize
    const Menu = app.model.define('Menu', {
      id: {
        type: INTEGER(10),
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: STRING(16),
        allowNull: false
      },
      status: {
        type: INTEGER(1),
        defaultValue: 1,
        allowNull: false
      },
      created_at: DATE,
      updated_at: DATE
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'menu'
    })
    Menu.associate = function() {
      app.model.Menu.hasMany(app.model.Article, { foreignKey: 'menuid', targetKey: 'id' });
    }
    return Menu
}