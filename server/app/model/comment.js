'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE, BOOLEAN } = app.Sequelize
    const Comment = app.model.define('Comment', {
      id: {
        type: INTEGER(10),
        primaryKey: true,
      },
      content: {
        type: STRING(255),
        allowNull: false
      },
      user_id: {
        type: STRING(16),
        references: {
          model: 'User',
          key: 'id'
        }
      },
      article_id: {
        type: STRING(16),
        references: {
          model: 'Article',
          key: 'id'
        }
      },
      fathercomment_id: {
        type: STRING(16),
        references: {
          model: 'User',
          key: 'id'
        }
      },
      updated_at: DATE,
      created_at: DATE,
      status: BOOLEAN(4)
    }, {
      // timestamps: false,
      underscored: true,
      tableName: 'comment'
    })

    Comment.associate = function() {
      app.model.Comment.belongsTo(app.model.Article, { foreignKey: 'article_id', targetKey: 'id'})
      app.model.Comment.belongsTo(app.model.User, { foreignKey: 'user_id', targetKey: 'id'})
      app.model.Comment.belongsTo(app.model.User, { foreignKey: 'fathercomment_id', targetKey: 'id'})
    }
    return Comment
}