//const apiUrl = 'http://localhost:3000/api';
const apiUrl = 'http://localhost:3000/v1/api';

/**
 *  AJAX request that returns a promise with the JSON file.
 * Works for all requests by changing arguments.
 * @param {*} api 
 * @param {*} verb 
 * @param {*} data 
 */
const makeRequest = {
    posts: {
        displayAll: async () => {
            try {
                const requestResponse = await fetch(apiUrl + '/posts', { method: 'GET' });

                //Returning data in JSON format if request is successful
                if (requestResponse.ok) {
                    const responseData = await requestResponse.json();
                    return responseData
                    
                    //Cheking for errors
                } else {
                    const error = { "error" : await requestResponse.json() }
                    return error;
                }

            } catch (error) {
                return error
            }
        }
    },

    users: {
        createUser: async (userInput) => {
            try {
                const requestResponse = await fetch(apiUrl + '/users/signup', { 
                    method: 'POST',
                    mode: 'cors',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(userInput)
                });

                //Returning data in JSON format if request is successful
                if (requestResponse.ok) {
                    const responseData = await requestResponse.json();
                    return responseData
                    
                    //Cheking for errors
                } else {
                    const error = { "error" : await requestResponse.json() };
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
