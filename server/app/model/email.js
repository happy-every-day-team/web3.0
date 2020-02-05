'use strict'

module.exports = app => {
  const { BOOLEAN, STRING, DATE } = app.Sequelize
    const Email = app.model.define('Email', {
      email_id: {
        type: STRING(16),
        primaryKey: true
      },
      meet_id: {
        type: STRING(16),
        allowNull: false,
        references: {
          model: 'Meet',
        }
      },
      content: STRING(255),
      title: STRING(255),
      modify_date: DATE,
      flag: BOOLEAN(4),
      created_date: DATE
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'email'
    })

    Email.associate = function() {
      app.model.Email.belongsTo(app.model.Meet, { foreignKey: 'meet_id', targetKey: 'meet_id'})
    }

    return Email
}