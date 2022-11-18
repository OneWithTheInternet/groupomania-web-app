const jwt = require('jsonwebtoken');

/**
 * Authenticates every request made after user is logged in
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
module.exports = (request, response, next) => {
    try{

        //Extracting token token from request's header
        const token = request.headers.authorization.split(' ')[1];
        //Verifying token
        const decodedToken = jwt.verify( token, process.env.JSONWEBTOKEN_KEY );
        //Extrating user ID from token
        const user_id = decodedToken.user_id;
        //Passing user ID to the next middleware
        request.auth = {user_id: user_id};

        //verifying that there is an user id in the token and that it matches the 
        if (!user_id) {
            throw 'Invalid user';
        } else {
            //Passing authorization
            next();
        }

    } catch {
        response.status(401).json({error: 'invalid request'});
    }
}