'use strict'

module.exports = app => {
  const { STRING, BOOLEAN } = app.Sequelize
    const Attendee = app.model.define('Attendee', {
      attendee_id: {
        type: STRING(16),
        primaryKey: true
      },
      meet_id: {
        type: STRING(16),
        references: {
          model: 'Meet',
          key: 'meet_id'
        }
      },
      user_id: {
        type: STRING(16),
        references: {
          model: 'User',
          key: 'id'
        }
      },
      flag: {
        type: BOOLEAN(4)
      }
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'attendee'
    })

    Attendee.associate = function() {
      app.model.Attendee.belongsTo(app.model.Meet, { foreignKey: 'meet_id', targetKey: 'meet_id'})
      app.model.Attendee.belongsTo(app.model.User, { foreignKey: 'user_id', targetKey: 'id' })
    }

    return Attendee
}