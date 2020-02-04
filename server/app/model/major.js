'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize
    const Major = app.model.define('Major', {
      id: {
        type: INTEGER(10),
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: STRING(16),
        allowNull: false
      },
      school: {
        type: INTEGER(10),
        allowNull: false,
        references: {
          model: 'School',
          key: 'id'
        }
      },
      created_at: DATE,
      updated_at: DATE
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'major'
    })

    Major.associate = function() {
      app.model.Major.hasMany(app.model.UserInfo, { foreignKey: 'major', targetKey: 'id' });
      app.model.Major.belongsTo(app.model.School, { foreignKey: 'school', targetKey: 'id'})
    }

    return Major
}