//const apiUrl = 'http://localhost:3000/api';
const apiUrl = 'http://localhost:3000/v1/api';

/**
 * AJAX request that returns a promise with the JSON file.
 * Works for all requests by changing arguments.
 * @param {*} api 
 * @param {*} verb 
 * @param {*} data 
 */
const makeRequest = {
    posts: {
        displayAll: async () => {
            try {
                const requestResponse = await fetch(apiUrl + '/posts', { 
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    } 
                });

                //Returning data in JSON format if request is successful
                if (requestResponse.ok) {
                    return await requestResponse.json()
                    
                    //Cheking for errors
                } else {
                    return await requestResponse.json()
                }

            } catch (error) {
                return error
            }
        },

        deletePost: async (post_id) => {
            
            try {
                const requestResponse = await fetch(apiUrl + '/auth/posts/' + post_id, { 
                    method: 'DELETE',
                    mode: 'cors',
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    } 
                });

                //Returning data in JSON format if request is successful
                if (requestResponse.ok) {
                    return await requestResponse.json()
                    
                    //Cheking for errors
                } else {
                    return await requestResponse.json()
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
                    return await requestResponse.json()
                    
                    //Cheking for errors
                } else {
                    return await requestResponse.json()
                }

            } catch (error) {
                return error
            }
        },

        loginUser: async (userInput) => {
            try {
                const requestResponse = await fetch(apiUrl + '/users/login', { 
                    method: 'POST',
                    mode: 'cors',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(userInput)
                });

                //Returning data in JSON format if request is successful
                if (requestResponse.ok) {
                    return await requestResponse.json()
                    
                    //Cheking for errors
                } else {
                    return await requestResponse.json()
                }

            } catch (error) {
                return error
            }
        },

        displayOneUser: async (user_id) => {

            try {
                const requestResponse = await fetch(apiUrl + '/users/' + user_id, { 
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    } 
                });

                //Returning data in JSON format if request is successful
                if (requestResponse.ok) {
                    return await requestResponse.json()
                    
                    //Cheking for errors
                } else {
                    return await requestResponse.json()
                }

            } catch (error) {
                return error
            }
        },
        
        deleteUser: async () => {

            try {
                const requestResponse = await fetch(apiUrl + '/users/delete-user', { 
                    method: 'DELETE',
                    mode: 'cors',
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    } 
                });

                //Returning data in JSON format if request is successful
                if (requestResponse.ok) {
                    return await requestResponse.json()
                    
                    //Cheking for errors
                } else {
                    return await requestResponse.json()
                }

            } catch (error) {
                return error
            }  
        }
    },

    comments: {
        displayPostComments: async (post_id) => {
            try {
                const requestResponse = await fetch(apiUrl + '/posts/' + post_id + '/comments', { 
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    } 
                });

                //Returning data in JSON format if request is successful
                if (requestResponse.ok) {
                    return await requestResponse.json()
                    
                    //Cheking for errors
                } else {
                    return await requestResponse.json()
                }
            } catch (error) {
                return error 
            }
        }
    }

}


export default makeRequest



/*
            //Accessing the URL parameteres
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const user_id = urlParams.get('user_id');            
*/