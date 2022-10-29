//const apiUrl = 'http://localhost:3000/api';
const apiUrl = 'https://jsonplaceholder.typicode.com';


/* function makeRequest(api, verb, data) {

    return fetch(apiUrl + api)

} */

/**
 *  AJAX request that returns a promise with the JSON file.
 * Works for all requests by changing arguments.
 * @param {*} api 
 * @param {*} verb 
 * @param {*} data 
 */
const makeRequest = {
    posts: {
        get: async () => {
            try {
                const requestResponse = await fetch(apiUrl + '/posts', { method: 'get' });

                //Returning data in JSON format if request is successful
                if (requestResponse.ok) {
                    const responseData = await requestResponse.json();
                    return responseData
                    
                    //Cheking for errors
                } else {
                    const error = { "error" : 'Error ' + requestResponse.status + '. Request not successful.'}
                    return error;
                }

            } catch (error) {
                return error
            }
        }
    }

}


export default makeRequest















/* const api = (apiUrl) => {
    posts: {
        get: (postID) => {
            return fetch(apiUrl + `/v2/post/${postID}`)
        }
    }
} */

//example of how I would use this in another function
//api.posts.get(1);
