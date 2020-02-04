'use strict'

module.exports = app => {
  const { DATE, STRING, BOOLEAN } = app.Sequelize
    const Topic = app.model.define('Topic', {
      topic_id: {
        type: STRING(16),
        primaryKey: true,
      },
      topic_name: STRING(255),
      created_date: DATE,
      description: STRING(255),
      flag: BOOLEAN(4),
      origin: {
        type: STRING(16),
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        }
      },
      modify_date: DATE
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'topic'
    })

    Topic.associate = function() {
      app.model.Topic.hasMany(app.model.TopicAdditionalFiles, { foreignKey: 'topic_additional_files_id', targetKey: 'topic_id' })
      app.model.Topic.hasMany(app.model.TopicTeachLog, { foreignKey: 'topic_teach_log_id', targetKey: 'topic_id' })
      app.model.Topic.hasMany(app.model.TopicTrace, { foreignKey: 'topic_trace_id', targetKey: 'topic_id' })
      app.model.Topic.belongsTo(app.model.User, { foreignKey: 'origin', targetKey: 'id'})
    }
    return Topic
}