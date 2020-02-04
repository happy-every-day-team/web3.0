'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE, BOOLEAN, TEXT } = app.Sequelize
    const Announcement = app.model.define('Announcement', {
      id: {
        type: INTEGER(10),
        primaryKey: true,
      },
      title: {
        type: STRING(64),
        allowNull: false
      },
      abstract: {
        type: STRING(128),
        allowNull: false
      },
      posterlink: {
        type: STRING(128),
        allowNull: false
      },
      context: {
        type: TEXT,
        allowNull: false
      },
      time: {
        type: DATE,
        allowNull: false
      },
      readnumber: {
        type: INTEGER(10),
        allowNull: false
      },
      status: {
        type: BOOLEAN(4),
        allowNull: false
      },
      top: {
        type: BOOLEAN(4),
        allowNull: false
      }
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'announcement'
    })
    return Announcement
}