const { Sequelize } = require('sequelize');
const DataTypes = Sequelize;
const dbConnect = require('../config/database');

/**
 * Model used to define the kind of data accepted by the database
 */
const Comment = dbConnect.define('comment', {
    comment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true       
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        allowNull: false
    },
    bodyText: {
        type: DataTypes.STRING(500),
        allowNull: false
    }
});

/**
 * Updates the database table as defined by the model
 */
async function syncronizeModel() {
    try { 
        await Comment.sync({ alter: true });
        console.log("The table for the Comment model was just updated")
    } catch (error) {
        console.log(error)
    }
}

//syncronizeModel();

module.exports = Comment;