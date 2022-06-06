const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// sets up the post object
class Post extends Model {}

Post.init(
  {
    // create id for post
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // create title for post
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // create post body
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // add user id for reference
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;