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
    const post_id = request.params.post_id

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
 * Deletes a comment in the database
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
exports.deleteComment = (request, response, next) => {
    try {     
        //Finding specified instance in the database
        Comment.findOne({ where: { comment_id: request.params.post_id } })
        
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