const express = require('express');
const Post = require('../models/Post');

/**
 * Finds in the database all instances of the specified resouce and sends them back to the client
 * Uses the sequalize model to manage database
 * @param {data recieved from client} request 
 * @param {data sent back to client} response 
 * @param {express method. calls next middleware} next 
 */
exports.displayAllPosts = (request, response, next) => {
    try {
        Post.findAll()
        .then((post) => {
            console.log('request successful')
            response.json(post)
        })
        .catch((error) => {
            response.json(error)
        })    
    } catch (error) {
        response.json(error)
    }
}


exports.createPost = (request, response, next) => {
    console.log(request.body);
    response.status(201).json({message: "testing bro"});
}

/* //Test Data. Delete for final build
const data = [
    {
        id: 4,
        userId: "sampleUser4",
        userName: "",
        userAvatarUrl: "",
        imageUrl: "",
        imageAltText: "",
        excerpt: "",
        commentsList: [null],
        commentsCount: 0,
        usersLiked: [null],
        likesCount: 0,
        usersDisLiked: [null],
        dislikesCount: 0,
        dateCreted : "???",
        creationTime: "0h"
    }
] */