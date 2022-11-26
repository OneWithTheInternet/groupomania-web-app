const express = require('express');
const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');
//fs (file system) gives you access to functions that allow you to modify the file system, in this case, deleting fotos.
const fs = require('fs');
const e = require('express');

/**
 * Finds in the database all instances of the specified resouce and sends them back to the client
 * Uses the sequalize model to manage database
 */
exports.displayAllPosts = (request, response, next) => {

    //pagination aid varialbes. if there is a "page" query string, we substract 1 and multiply it by 10. Thats the amount of offset we need
    const pageNumber = request.query.page;
    const itemsPerPage = 10;
    const totalRequested = itemsPerPage * pageNumber;

    try {
        //finding posts in the database and returning first 10 organized by upload date
        Post.findAll( {
            limit: totalRequested,
            order : [['updatedAt', 'DESC']],
            raw: true,
            include: [
                {
                    model: User,
                    attributes: ['userName']
                }
            ]
        } )
        
        .then((posts) => {
            if( totalRequested <= posts.length + itemsPerPage ) {
                //sending back response
                return response.status(200).json(posts);
            } else {
                return response.status(404).json({error: 'No resources found'});
            }         
        })
        
        .catch((error) => {
            response.status(400).json(error);
        })    
    } catch (error) {
        response.status(400).json(error);
    }
}

/**
 * Takes data sent with request and saves it as a new instance of "post" in the database
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 * @returns 
 */
exports.createPost = (request, response, next) => {
    
    //Creating URL for images. If there is no file the url is null.
    const image_url = request.file ?
    request.protocol + '://' + request.get('host') + "/images/" + request.file.filename
    : null;

    //storing data from request in variables
    request.body.post = JSON.parse(request.body.post);
    let { image_altText, bodyText } = request.body.post;
    
    //Checking errors
    let errors = [];

    //user_id variable comes from auth middleware
    if(!request.auth.user_id || request.auth.user_id == null) {
        errors.push({ error: 'Please specify a user'})
    }
    if(!image_url && !bodyText || image_url == null && bodyText == null || !image_url && bodyText == null || image_url == null && !bodyText ) {
        errors.push({ error: 'Please add an image or text'})
    } 
    if(errors.length > 0) {
        return response.status(400).json(errors)
    } else {
        
        //Creating post if no errors were found
        try {
            //Creating a new entry in the database using the post model and the request's data
            const newPost = Post.create({
                user_id: request.auth.user_id,
                //creating an conditional. If value is "undefined", assign "null"
                image_url: image_url != null ? image_url : null, 
                image_altText: image_altText,
                //creating an conditional. If value is "undefined", assign "null"
                bodyText: bodyText != null ? bodyText : null
            })
            
            //Sending back response
            .then(() => {
                response.status(201).json([{message: 'post created successfully'}])
            })
            .catch((error) => {
                response.status(400).json(error);
            })
        
        } catch (error) {
            response.status(400).json(error);
        }
    }
}

/**
 * Finds specified post ID in the database
 * returns the resource instances as an object
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
exports.displayPost = (request, response, next) => {
    try {
        //Finding specified object in the database
        Post.findOne({ where: { post_id: request.params.post_id } })
        
        //Sending 'post' object data as response
        .then((post) => {

            if (post !== null) {
                //response if resource instance was found
                response.json(post)
            }

            else {
                //response if there where no results
                response.status(404).json({error: "Resource not found"})
            }
        })
        .catch((error) => {
            response.status(400).json(error);
        })  
    } catch (error) {
        response.status(400).json(error);
    }
}

/**
 * Removes specified resource instance
 * Removes associated comments
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
exports.deletePost = (request, response, next) => {
    try {     
        //Finding specified instance in the database
        Post.findOne({ where: { post_id: request.params.post_id } })
        
        //destroying post
        .then((post) => {

            //Checking post exists in database
            if (!post || post == null) {
                return response.status(404).json({
                    error: 'Resource not found'
                });
            }

            //Cheking user is authorized to delete post by mathing his ID to the post owner's ID
            if (post.user_id !== request.auth.user_id) {
                return response.status(401).json({
                    error: 'Request not authorized'
                });
            }

            //Extracting image's name from resource instance. if no image_url, file name will be null
            const filename = post.image_url !== null ? 
            post.image_url.split('/images/')[1] 
            : null;

            //Deleting related image
            if (filename !== null) {
                fs.unlink('images/' + filename, (error) => {
                    if (error) {
                        return response.status(500).json(error);
                    } 
                });
            }

            //Deleting post in database
            post.destroy()
            .then (() => {
                response.status(200).json({message: "post deleted sucessfully"})
            })

            .catch ((error) => {
                response.status(400).json(error);

            })
        })
        
        //Catching database query errors
        .catch((error) => {
            response.status(400).json(error);
            console.log("Something went wrong: " + error)  
        })
        
     //Catching request errors   
    } catch (error) {
        response.status(400).json(error);
        console.log("Something went wrong: " + error)  
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