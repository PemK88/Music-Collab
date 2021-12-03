// environment configutations
import ENV from '../config.js'
const API_HOST = ENV.api_host


// A function to send a POST request with a new user
export const addPost = (workForm) => {
    // the URL for the request
    const url = `${API_HOST}/posts`;
    console.log("in add post")

    // The data we are going to send in our request
    const post = workForm;

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(post),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(function (res) {
            // Handle response we get from the API.
            // Usually check the error codes to see what happened.
            if (res.status === 200) {
                // If student was added successfully, tell the user.
                console.log("Post was successfully added")
            } else {
                // If server couldn't add the student, tell the user.
                // Here we are adding a generic message, but you could be more specific in your app.
                console.log("failed to add post")
            }
        })
        .catch(error => {
            console.log("post error: " + error);
        });
};
