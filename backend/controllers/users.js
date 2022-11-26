const express = require('express');
const User = require('../models/User');
//importing package for password encryption/validation
const bcrypt = require('bcrypt');
//importing package for token management
const jwt = require('jsonwebtoken');

/**
 * Takes data sent with request and saves it as a new instance of "user" in the database
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 * @returns 
 */
exports.createUser = (request, response, next) => {
     
    //storing data from request in variable
    let { email, userName, password } = request.body.user;
    
    //Checking errors
    let errors = [];
    
    if( !email || email == null ) {
        errors.push({ error: 'Please add an email adress'})
    } 
    if( !userName || userName == null ) {
        errors.push({ error: 'Please add a user name'})
    } 
    if( !password || password == null ) {
        errors.push({ error: 'Please add a password'})
    } 
    if(errors.length > 0) {
        return response.status(400).json(errors)
    } else {

        //Creating a user if no errors were found
        try {
            //encripting password using bcrypt package
            bcrypt.hash(password, 10).then((hash) => {
                
                //Creating a new entry in the database using the post model and the request's data
                const newUser = User.create({
                    email: email,
                    userName: userName,
                    password: hash
                })
                
                //Sending back response
                .then(() => {
                    response.status(201).json({message: 'user created successfully'})
                })

                //catching databse request errors
                .catch((error) => {
                    response.status(400).json(error);
                })
            })
            
        //catching request errors 
        } catch (error) {
            response.status(400).json(error);
        }
    }
}

/**
 * Logs user into the their account by creating a session token that authorizes every request that needs it.
 * Session expires in 24 hrs
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 * @returns user ID and token object
 */
exports.loginUser = (request, response, next) => {

    //storing data from request in variable
    let { email, password } = request.body.user;
    
    //Checking errors
    let errors = [];
    
    if( !email || email == null ) {
        errors.push({ error: 'Please add an email adress'})
    } 
    if( !password || password == null ) {
        errors.push({ error: 'Please add a password'})
    } 
    if(errors.length > 0) {
        return response.status(400).json(errors)
    } else {
        
        try {
            //Finding specified object in the database
            User.findOne({ where: { email: email } })
            
            //Sending 'post' object data as response
            .then((user) => {
                //response if there where no results
                if (user == null || !user) {
                    return response.status(401).json({ error: 'User not found!' })
                }

                //Cheking password validity using bcrypt package
                bcrypt.compare(password, user.password)
                
                .then( (valid) => {
                    //sending response
                    if (!valid || valid == false) {
                        console.log(user);
                        return response.status(401).json({ error: 'Incorrect user or password'});
                    }
                    
                    //Creating a token
                    const token = jwt.sign(
                        {user_id: user.user_id},
                        process.env.JSONWEBTOKEN_KEY,
                        {expiresIn: '24h'}
                    );

                    response.status(200).json({
                        user_id: user.user_id,
                        token: token
                    })
                })
                
                //Catching bcrypt request errors
                .catch(
                    (error) => {
                    return response.status(401).json(error);
                    }
                );
            })
            
            //Catching database request errors
            .catch((error) => {
                response.status(500).json(error);
            })
            
            //Catching request errors
        } catch (error) {
            response.status(400).json(error);
        }       
    }
}

exports.displayOneUser = (request, response, next) => {
    console.log(request.params.user_id);
    
    try {
        //Finding specified object in the database
        User.findOne({ 
            where: { user_id: request.params.user_id },
            attributes: ['user_id', 'userName', 'createdAt'] 
        })
        //Sending 'user' object data as response
        .then((user) => {
            //Checking user exists in database
            if (user !== null) {
                return response.status(200).json(user)
            } else {
                //response if there where no results
                return response.status(404).json({ error: 'User not found!' })
            }
        })
        //Catching database request errors
        .catch((error) => {
            response.status(500).json(error);
        })       
        //Catching request errors
    } catch (error) {
        response.status(400).json(error);
    }       
    
}


/**
 * Removes user from database
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
exports.deleteUser = (request, response, next) => {

    try {     
        //Finding specified instance in the database
        User.findOne({ where: { user_id: request.auth.user_id } })
        
        //destroying user
        .then((user) => {
            
            //Checking user exists in database
            if ( user ) {
                
                //Deleting user in database
                user.destroy()
                .then (() => {
                    response.status(200).json({message: "user " + user.userName + " deleted sucessfully"})
                })
                
                .catch ((error) => {
                    response.status(400).json(error);        
                })
                
            } else {
                return response.status(404).json({
                    error: 'Resource not found'
                });
            }

        })
        
        //Catching database query errors
        .catch((error) => {
            response.status(400).json(error);
        })
        
     //Catching request errors   
    } catch (error) {
        response.status(400).json(error);
    }

}
