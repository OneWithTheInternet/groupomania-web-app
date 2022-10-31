const { Sequelize } = require('sequelize');
const dbConnect = require('../config/database');

/**
 * Model used to define the kind of data accepted by the database
 */
const Post = dbConnect.define('post', {
    post_id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,        
    },
    user_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false, 
    },
    image_url: {
        type: Sequelize.DataTypes.STRING(500),
    },
    image_AltText: {
        type: Sequelize.DataTypes.STRING(500),
    },
    bodyText: {
        type: Sequelize.DataTypes.STRING(500),
    }
});

/**
 * Takes the defined model and synchronizes it to the database
 */
/* async function syncModel() {
    try {
        await Post.sync({ alter: true })
        console.log('Table and model synced successfully');
    } catch (error) {
        console.log('Error syncing the table and model.' + error);
    }
}
syncModel() */