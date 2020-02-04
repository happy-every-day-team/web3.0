'use strict'

module.exports = app => {
  const { DATE, STRING } = app.Sequelize
    const MeetLog = app.model.define('MeetLog', {
      meet_log_id: {
        type: STRING(16),
        primaryKey: true
      },
      meet_id: {
        type: STRING(16),
        references: {
          model: 'Meet',
          key: 'meet_id',
        }
      },
      content: STRING(255),
      additional: STRING(255),
      title: STRING(16),
      created_date: DATE,
      modify_date: DATE
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'meet_log'
    })

    MeetLog.associate = function() {
      app.model.MeetLog.belongsTo(app.model.Meet, { foreignKey: 'meet_id', targetKey: 'meet_id'})
    }

    return MeetLog
}