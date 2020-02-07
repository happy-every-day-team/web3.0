'use strict'

module.exports = app => {
  const { INTEGER, DATE, STRING, BOOLEAN } = app.Sequelize
    const Meet = app.model.define('Meet', {
      meet_id: {
        type: INTEGER(16),
        primaryKey: true,
      },
      created_date: DATE,
      start_date: DATE,
      end_date: DATE,
      address: STRING(16),
      send_flag: BOOLEAN(4),
      user_id: {
        type: STRING(16),
        references: {
          model: 'User',
          key: 'id'
        }
      },
      content: STRING(255),
      log_writer: {
        type: STRING(16),
        references: {
          model: 'User',
          key: 'id'
        }
      },
      title: STRING(16)
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'meet'
    })

    Meet.associate = function() {
      app.model.Meet.belongsTo(app.model.User, { foreignKey: 'user_id', targetKey: 'id'})
      app.model.Meet.belongsTo(app.model.User, { foreignKey: 'log_writer', targetKey: 'id'})
    }

    return Meet
}