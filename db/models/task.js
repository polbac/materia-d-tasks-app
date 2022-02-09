'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static STATUS_OPTIONS = ['new', 'doing', 'completed', 'expired']
    
    static associate(models) {
      Task.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId',
      })

      Task.belongsToMany(models.Label, {
        as: 'labels',
        through: 'TaskLabel',
        foreignKey: 'taskId',
        otherKey: 'labelId',
        timestamps: false,
      })
    }
  };
  Task.init({
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    deadline: DataTypes.DATE,
    status: DataTypes.ENUM('new', 'doing', 'completed', 'expired'),
  }, {
    sequelize,
    modelName: 'Task',
    paranoid: true,
  });
  return Task;
};