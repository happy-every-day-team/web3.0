'use strict'

module.exports = app => {
  const { DATE, STRING, BOOLEAN } = app.Sequelize
    const TopicAdditionalFiles = app.model.define('TopicAdditionalFiles', {
      topic_additional_files_id: {
        type: STRING(16),
        primaryKey: true
      },
      topic_trace_id: {
        type: STRING(16),
        allowNull: false,
        references: {
          model: 'TopicTrace',
          key: 'topic_trace_id',
        }
      },
      links: {
        type: STRING(255),
      },
      upload_date: DATE(4),
      stage: BOOLEAN(4),
      description: STRING(255)
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'topic_additional_files'
    })

    TopicAdditionalFiles.associate = function() {
      app.model.TopicAdditionalFiles.belongsTo(app.model.TopicTrace, { foreignKey: 'topic_trace_id', targetKey: 'topic_trace_id'})
    }

    return TopicAdditionalFiles
}