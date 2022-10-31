const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const dbConnect = require('./config/database')

//importing routes
const postsRoutes = require('./routes/posts');
const commentsRoutes = require('./routes/comments');
const usersRoutes = require('./routes/users');

//Current version of the API
const APIVersion = "v1";

/**
 * Connecting to database and Testing it
 */
 async function startDb() {
    try {
        await dbConnect.authenticate();
        console.log('Database connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
startDb();

//Prevents cross-origin resourse sharing (CORS) errors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//Adding routes
app.use("/" + APIVersion + '/api/auth', postsRoutes);
app.use("/" + APIVersion + '/api/auth', postsRoutes);
app.use("/" + APIVersion + '/api/auth', postsRoutes);

module.exports = app;