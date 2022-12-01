const { Sequelize } = require('sequelize');
const DataTypes = Sequelize;
const dbConnect = require('../config/database');
//Importing other models
const Comment = require('./Comment')

/**
 * Model used to define the kind of data accepted by the database
 */
const Post = dbConnect.define('post', {
    post_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,        
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    image_url: {
        type: DataTypes.STRING(500),
    },
    image_altText: {
        type: DataTypes.STRING(500),
    },
    bodyText: {
        type: DataTypes.STRING(500),
    }
});

//Creating associations between model
Post.hasMany(Comment, {
    foreignKey: 'post_id'
  });
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
  })

/**
 * Updates the database table as defined by the model
 */
 async function syncronizeModel() {
    try { 
        await Post.sync({ alter: true });
        console.log("The table for the Comment model was just updated")
    } catch (error) {
        console.log(error)
    }
}

//syncronizeModel();

module.exports = Post;