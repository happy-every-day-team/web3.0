'use strict'

module.exports = app => {
  const { DATE, STRING, BOOLEAN } = app.Sequelize
    const TopicTrace = app.model.define('TopicTrace', {
      topic_trace_id: {
        type: STRING(16),
        primaryKey: true
      },
      topic_id: {
        type: STRING(16),
        allowNull: false,
        references: {
          model: 'Topic',
          key: 'topic_id',
        }
      },
      user_id: {
        type: STRING(16),
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        }
      },
      apply_date: DATE,
      flag: {
        type: BOOLEAN(4)
      },
      final_date: {
        type: DATE(4)
      },
      appraise: STRING(255),
      self_appraise: STRING(255)
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'topic_trace'
    })

    TopicTrace.associate = function() {
      app.model.TopicTrace.belongsTo(app.model.User, { foreignKey: 'user_id', targetKey: 'id'})
      app.model.TopicTrace.belongsTo(app.model.Topic, { foreignKey: 'topic_id', targetKey: 'topic_id'})
    }

    return TopicTrace
}