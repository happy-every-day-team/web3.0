'use strict'

module.exports = app => {
  const { DATE, STRING, BOOLEAN } = app.Sequelize
    const TopicTeachLog = app.model.define('TopicTeachLog', {
      topic_teach_log_id: {
        type: STRING(16),
        primaryKey: true
      },
      teacher_id: {
        type: STRING(16),
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        }
      },
      teach_date: DATE,
      log: STRING(255),
      additional_files: STRING(255),
      flag: BOOLEAN(4),
      topic_trace_id: {
        type: STRING(16),
        allowNull: false,
        references: {
          model: 'TopicTrace',
          key: 'topic_trace_id',
        }
      }
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'topic_teach_log'
    })

    TopicTeachLog.associate = function() {
      app.model.TopicTeachLog.belongsTo(app.model.TopicTrace, { foreignKey: 'topic_trace_id', targetKey: 'topic_trace_id'})
    }

    return TopicTeachLog
}