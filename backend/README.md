### Collections and Resources
Users
    user
        id
        name
        username
        password
        createdAt
        updatedAt



Posts
    post
        id
        user Id
        body text
        alt Text
        imageUrl
        createdAt
        updatedAt


Comments
    comment
        id
        user Id
        post Id
        body Text
        createdAt
        updatedAt



### Endpoints

POST  v1/api/users/signup                   <!-- creates new user  username | "post" object with fields "email" and "name" and "password" | -->*
POST v1/api/users/login                     <!-- logs user into their account | "post" object with fields "email" and "password" --> *
GET v1/api/users/:id                        <!-- Returns info about a single user -->
DELETE v1/api/auth/users/:_id               <!-- deletes user | token -->*

GET v1/api/posts                            <!-- Returns all posts in the database -->*
GET v1/api/posts?page=3                     <!-- Returns third page of posts in the database -->*
POST v1/api/auth/posts                      <!-- creates a post | token, "post" object with fields "altText" and "bodyText", image field containing a file -->*
GET v1/api/posts/:_id                       <!-- returns specified post | "post" object with fields "userId" and "postId" -->*
DELETE /api/auth/posts/:id                  <!-- deletes post from database | "post" object with fields "user_id", post ID as URL param-->*

POST api/auth/posts/:_id/comments           <!-- creates a new comment | token, "post" object with a "bodyText", post ID as url param -->*
GET api/posts/:post/comments                <!-- Returns all comments for a specified post -->
DELETE /api/auth/comments/:_id              <!-- deletes comment | token, "post" object with fields "commentId" -->
    


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
