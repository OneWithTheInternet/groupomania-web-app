### Collections and Resources
Users
    user
        user_id
        userName
        password
        createdAt
        updatedAt



Posts
    post
        post_id
        user_Id
        bodyText
        altText
        imageUrl
        createdAt
        updatedAt


Comments
    comment
        id
        user_Id
        post_Id
        bodyText
        createdAt
        updatedAt


### Responses

Backend is always going to respond with an array of one or more items or objescts. use Array[#] to access them in JavaScript.


### Endpoints

POST  v1/api/users/signup                   <!-- creates new user  username | "post" object with fields "email" and "name" and "password" | -->*
POST v1/api/users/login                     <!-- logs user into their account | "post" object with fields "email" and "password" --> *
GET v1/api/users/:id                        <!-- Returns info about a single user -->
DELETE v1/api/auth/users/:_id               <!-- deletes user | token -->*

GET v1/api/posts?page=3                     <!-- Returns all posts in the database up to the limit set by pageNumber parameter and in increments of 10 posts per page-->*
POST v1/api/auth/posts                      <!-- creates a post | token, "post" object with fields "altText" and "bodyText", image field containing a file -->*
GET v1/api/posts/:_id                       <!-- returns specified post | "post" object with fields "userId" and "postId" -->*
DELETE /api/auth/posts/:id                  <!-- deletes post from database | "post" object with fields "user_id", post ID as URL param-->*

POST api/auth/posts/:post_id/comments       <!-- creates a new comment | token, "post" object with a "bodyText", post ID as url param -->*
GET api/posts/:post/comments                <!-- Returns all comments for a specified post -->
DELETE /api/auth/comments/:comment_id       <!-- deletes comment | token, "post" object with fields "commentId" -->
    


### Errors

Authorization error

Account already exists. Try logging in

invalid password

Text is too long

Image file error

No posts to display yet

404, page not found

500, backend server error

***********BACK END FORM VALIDATION
