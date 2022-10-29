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
        post Id
        user Id
        body Text
        createdAt
        updatedAt



### Endpoints

POST  v1/api/signup                   <!-- creates new user  username | email, name, password | -->
POST v1/api/login                     <!-- logs user into their account | email, password -->
DELETE v1/api/users/:userId           <!-- deletes user | user id -->


GET v1/api/posts                      <!-- Returns all posts in the database -->
GET v1/api/posts?page=1              <!-- Returns first page of posts in the database -->
POST v1/api/posts                     <!-- creates a post | userId, body text, image url -->
GET v1/api/posts/:postId              <!-- returns specified post | userId, postId -->
GET v1/api/posts/:postId/comments     <!-- Returns all comments for a specified post -->
DELETE /api/posts/:id               <!-- deltes post from database | userId, postId -->


POST /api/comments                  <!-- creates a new comment | userId, body text, postId -->
DELETE /api/comments/:id            <!-- deletes comment | userId, commentId -->
    


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
