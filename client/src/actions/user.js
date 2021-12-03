// Functions to help with user actions.

// environment configutations
import ENV from '../config.js'
const API_HOST = ENV.api_host
// console.log('Current environment:', ENV.env)

// Send a request to check if a user is logged in through the session cookie


// A function to send a POST request with a new user
export const addUser = (formComp) => {
    // the URL for the request
    const url = `${API_HOST}/api/users`;

    // The data we are going to send in our request
    const user = formComp

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(user),
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
                console.log("successfully added user")
            } else {
                // If server couldn't add the student, tell the user.
                // Here we are adding a generic message, but you could be more specific in your app.
                console.log("failed to add user")
            }
        })
        .catch(error => {
            console.log(error + '1');
        });
};

export const checkSession = (changeState) => {
    const url = `${API_HOST}/users/check-session`;

    fetch(url)
    .then(res => {
        if (res.status === 200) {
            console.log('200')
            return res.json();
        }
    })
    .then(json => {
        if (json && json.username) {
            console.log('change')
            changeState({ username: json.username, isAdmin: json.isAdmin });
        }
    })
    .catch(error => {
        console.log(error + '1');
    });
}

// A function to send a POST request with the user to be logged in
export const login = (loginComp, changeState) => {
    // Create our request constructor with all the parameters we need
    const request = new Request(`${API_HOST}/users/login`, {
        method: "post",
        body: JSON.stringify(loginComp),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                console.log('200')
                return res.json();
            }
        })
        .then(json => {
            if (json.username !== undefined) {
                console.log('change')
                changeState({ username: json.username, isAdmin: json.isAdmin });
            }
        })
        .catch(error => {
            console.log(error);
        });
};

// A function to send a GET request to logout the current user
export const logout = (app) => {
    const url = `${API_HOST}/users/logout`;

    fetch(url)
        .then(res => {
            app.setState({
                currentUser: null,
                message: { type: "", body: "" }
            });
        })
        .catch(error => {
            console.log(error);
        });
};
    