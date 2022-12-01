const { Sequelize } = require('sequelize');
const DataTypes = Sequelize;
const dbConnect = require('../config/database');
//Importing other models
const Post = require("./Post");
const Comment = require("./Comment")

/**
 * Model used to define the kind of data accepted by the database
 */
const User = dbConnect.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false, 
        autoIncrement: true        
    },
    email: {
        type: DataTypes.STRING(500),
        allowNull: false, 
        unique: true
    },
    userName: {
        type: DataTypes.STRING(500),
        allowNull: false, 
    },
    password: {
        type: DataTypes.STRING(500),
        allowNull: false
    }
});

//Creating associations between model
User.hasMany(Post, {
    foreignKey: 'user_id'
  });
Post.belongsTo(User, {
    foreignKey: 'user_id'
  });
User.hasMany(Comment, {
    foreignKey: 'user_id'
  });
Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });

/**
 * Updates the database table as defined by the model
 */
 async function syncronizeModel() {
    try { 
        await User.sync({ alter: true });
        console.log("The table for the Comment model was just updated")
    } catch (error) {
        console.log(error)
    }
}

//syncronizeModel();

module.exports = User;