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

export const checkSession = (changeState, changeUser) => {
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
            changeState({ username: json.username, isAdmin: json.isAdmin, id: json.id });
            return json.username;
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
            Accept: "application/json, text/plain, /",
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
                changeState({ username: json.username, isAdmin: json.isAdmin, id: json.id });
            }
        })
        .catch(error => {
            console.log(error);
        });
};

// A function to send a GET request to logout the current user
export const logout = (changeState) => {
    const url = `${API_HOST}/users/logout`;

    fetch(url)
        .then(res => {
            changeState({ username: null, isAdmin: null });
        })
        .catch(error => {
            console.log(error);
        });
};
    
export const getUserDetails = (username, changeState) => {

    const url = `${API_HOST}/users/details/${username}`;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                console.log("Could not get user");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            if(json && json._id) {
                changeState({...json});
            }
            
        })
        .catch(error => {
            console.log(error);
        });
};

   
export const getUserByID = (userId, changeState) => {

    const url = `${API_HOST}/users/${userId}`;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                console.log("Could not get user");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            if(json && json._id) {
                changeState({...json});
            }
            
        })
        .catch(error => {
            console.log(error);
        });
};

export const updateUserBioByID = (userId, biography) => {

    const url = `${API_HOST}/users/bio`;

    const body = {
        userId: userId,
        biography: biography
    }

    const request = new Request(url, {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });


    fetch(request)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                console.log("updated bio")
                return;
            } else {
                console.log("Could not update bio");
            }
        })
        .catch(error => {
            console.log(error);
        });
};


export const updateUserPhotoByID = (form) => {

    const url = `${API_HOST}/users/updateCoverPhoto`;

    const formData = form;

    const request = new Request(url, {
        method: "PATCH",
        body: formData,
        headers: {
            Accept: "application/json, text/plain, */*"
        }
    });


    fetch(request)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                console.log("updated photo")
                return;
            } else {
                console.log("Could not photo");
            }
        })
        .catch(error => {
            console.log(error);
        });
};




export const getUsersWithIds = async (idsList, setState) => {

    const url = `${API_HOST}/users/getUsersByIds`;

    const  list = {
        ids: idsList
    }

    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(list),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    try {
        const res =  await fetch(request);

        if (res.status !== 200) {
            console.log("Could not get users");
            return;
        }

        const result = res.json();

        result.then(json => {
            console.log("got users");
            console.log("this is result " + result)
            // the resolved promise with the JSON body
            if(json) {
                setState([...json]);
            }
            
        })

    }
    catch(error) {
        console.log(error);
    };
    
};



export const addFollowing = (userId, addedUserId) => {

    const url = `${API_HOST}/users/addFollowing/${userId}/${addedUserId}`;

    const request = new Request(url, {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });


    fetch(request)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                console.log("added following")
                return;
            } else {
                console.log("Could not add following");
            }
        })
        .catch(error => {
            console.log(error);
        });
};


export const removeFollowing = (userId, addedUserId) => {

    const url = `${API_HOST}/users/removeFollowing/${userId}/${addedUserId}`;

    const request = new Request(url, {
        method: "DELETE",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });


    fetch(request)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                console.log("removed following")
                return;
            } else {
                console.log("Could not remove following");
            }
        })
        .catch(error => {
            console.log(error);
        });
};


