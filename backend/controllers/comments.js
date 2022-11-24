const express = require('express');
const Comment = require('../models/Comment');
const User = require('../models/User');


/**
 * Takes data sent with request and saves it as a new instance of "comment" in the database
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 * @returns 
 */
exports.createComment = (request, response, next) => {
    
    //Defining needed variables
    const user_id = request.auth.user_id;
    const post_id = request.params._id

    //storing data from request in variable
    let { bodyText } = request.body.post;
    
    //Checking errors
    let errors = [];
    
    if( !user_id || user_id == null) {
        errors.push({ error: 'Please specify a user'})
    }
    if( !bodyText || bodyText == null ) {
        errors.push({ error: 'Please add text'})
    } 
    if(errors.length > 0) {
        return response.status(400).json(errors)
    } else {
        
        //Creating post if no errors were found
        try {
            //Creating a new entry in the database using the post model and the request's data
            const newComment = Comment.create({
                user_id: user_id,
                post_id: post_id,
                bodyText: bodyText
            })
            
            //Sending back response
            .then(() => {
                response.status(201).json([{message: 'comment created successfully'}])
            })

            //Catching sql query errors
            .catch((error) => {
                response.status(400).json(error);
            })
            
         //Catching request errors
        } catch (error) {
            response.status(400).json(error);
        }
    }
}

/**
 * Finds in the database all instances of the specified resouce and sends them back to the client
 * Uses the sequalize model to manage database
 * @param {data recieved from client} request 
 * @param {data sent back to client} response 
 * @param {express method. calls next middleware} next 
 */
exports.displayPostComments = (request, response, next) => {

    //pagination aid varialbes. if there is a "page" query string, we substract 1 and multiply it by 10. Thats the amount of offset we need
    const index = request.query.page ? request.query.page - 1 : 0;
    const pageOffset = request.query.page ? 10 * index : 0;
    console.log(index, pageOffset);

    try {
        //finding Comments that match post ID in the database and returning first 10 organized by upload date
        Comment.findAll({
            where: { post_id: request.params.post_id },
            offset: pageOffset, 
            limit: 10,
            order : [['updatedAt', 'DESC']],
            include: [{
                model: User,
                attributes: ['userName']
            }]
        })
        
        //sending back response
        .then((posts) => {
            response.json(posts);
        })
        
        .catch((error) => {
            response.status(400).json(error);
        })    
    } catch (error) {
        response.status(400).json(error);
    }
}

/**
 * Deletes a comment in the database
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
exports.deleteComment = (request, response, next) => {
    try {     
        //Finding specified instance in the database
        Comment.findOne({ where: { comment_id: request.params._id } })
        
        //destroying comment
        .then((comment) => {

            //Checking comment exists in database
            if (!comment || comment == null) {
                return response.status(404).json({
                    error: 'Resource not found'
                });
            }

            //Cheking user is authorized to delete comment by matching his ID to the post owner's ID
            if (comment.user_id !== request.auth.user_id) {
                return response.status(401).json({
                    error: 'Request not authorized'
                });
            }

            //Deleting comment in database
            comment.destroy()
            .then (() => {
                response.status(200).json({ message: "comment deleted sucessfully" })
            })

            .catch ((error) => {
                response.status(400).json(error);

            })
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