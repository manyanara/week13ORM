const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
   id: {
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    AutoIncrement: true,
   },
   tag_name: {
    type: DataType.String,
   }, 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
