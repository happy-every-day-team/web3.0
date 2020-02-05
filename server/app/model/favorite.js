'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize
    const Favorite = app.model.define('Favorite', {
      id: {
        type: STRING(10),
        primaryKey: true,
        autoIncrement: true
      },
      userid: {
        type: STRING(16),
        allowNull: false
      },
      articleid: {
        type: INTEGER(10),
        allowNull: false,
        references: {
          model: 'Article',
        }
      },
      created_at: DATE,
      updated_at: DATE
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'favorite'
    })

    Favorite.associate = function() {
      app.model.Favorite.belongsTo(app.model.UserInfo, { foreignKey: 'userid', targetKey: 'id' });
      app.model.Favorite.belongsTo(app.model.Article, { foreignKey: 'articleid', targetKey: 'id'})
    }

    return Favorite
}