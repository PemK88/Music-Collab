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

export const deleteUser = (id) => {
    // the URL for the request
    const url = `${API_HOST}api/users/${id}`;

    // The data we are going to send in our request

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "delete",
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
                console.log("successfully removed user")
            } else {
                // If server couldn't add the student, tell the user.
                // Here we are adding a generic message, but you could be more specific in your app.
                console.log("failed to remove user")
            }
        })
        .catch(error => {
            console.log(error);
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
    .then(username => { 
        if(username) {
            getUserDetails(username, changeUser)
        }

    })
    .catch(error => {
        console.log(error + '1');
    });
}

// export const checkSessionFunction = (changeState) => {
//     const url = `${API_HOST}/users/check-session`;

//     fetch(url)
//     .then(res => {
//         if (res.status === 200) {
//             console.log('200')
//             return res.json();
//         }
//     })
//     .then(json => {
//         if (json && json.username) {
//             console.log('change')
//             changeState({ username: json.username, isAdmin: json.isAdmin, id: json.id });
//             return json.username;
//         }
//     })
//     .catch(error => {
//         console.log(error + '1');
//     });
// }

// A function to send a POST request with the user to be logged in
export const login = (loginComp, changeState, time) => {
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
                changeState({ username: json.username, isAdmin: json.isAdmin, id: json.id });
                return json.id
            }
        })
        .then(userID => {
            if (userID) {
                setLastLogIn(userID, time)
                console.log("------- setting last log in ----------")
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
            changeState({ username: null, isAdmin: null, id: null });
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

   
export const getUser = (id, setUser) => {

    const url = `${API_HOST}/api/users/${id}`;


    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "get",
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
            setUser({
                id: json.id,
                username: json.username,
                isAdmin: json.isAdmin,
                password: json.password,
                profileName: json.profileName,
                email: json.email,
                interests: json.interests,
                uploadedWorks: json.uploadedWorks,
                downloadedWorks: json.downloadedWorks,
                likedWorks: json.likedWorks, 
                followers: json.followers,
                followings: json.followings,
                lastLogIn: json.lastLogIn,
                activityLog: json.activityLog,
                profilePhoto: json.profilePhoto
            });
        })
        .catch(error => {
            console.log(error);
        });
};


export const getUserByID = (userId, changeState) => {

    const url = `${API_HOST}/users/${userId};`

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

export const getUserInfo = (setUserData) => {
    // the URL for the request
    const url = `${API_HOST}/api/users`;

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "get",
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
            setUserData({users: json.users});
        })
        .catch(error => {
            console.log(error);
        });
};

export const addActivty = (log, adminID) => {
    // the URL for the request
    const url = `${API_HOST}/api/users/activity/${ adminID }`;

    // The data we are going to send in our request

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(log),
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
                console.log("successfully added activity log")
            } else {
                // If server couldn't add the student, tell the user.
                // Here we are adding a generic message, but you could be more specific in your app.
                console.log("failed to add activity log")
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const clearActivity = (adminID) => {
    // the URL for the request
    const url = `${API_HOST}/api/users/activity/${ adminID }`;

    // The data we are going to send in our request

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "delete",
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
                console.log("successfully cleared activity log")
            } else {
                // If server couldn't add the student, tell the user.
                // Here we are adding a generic message, but you could be more specific in your app.
                console.log("failed to clear activity log")
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const likePost = (userID, postID) => {
    // the URL for the request
    const url = `${API_HOST}/api/users/likedWorks/${ userID }`;
    const postJSON = {id: postID}
    // The data we are going to send in our request

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(postJSON),
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
                console.log("successfully liked post")
            } else {
                // If server couldn't add the student, tell the user.
                // Here we are adding a generic message, but you could be more specific in your app.
                console.log("failed to like post")
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const unlikePost = (userID, postID) => {
    // the URL for the request
    const url = `${API_HOST}/api/users/likedWorks/${userID}/${postID}`;

    // The data we are going to send in our request

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "delete",
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
                console.log("successfully unliked post")
            } else {
                // If server couldn't add the student, tell the user.
                // Here we are adding a generic message, but you could be more specific in your app.
                console.log("failed to like post")
            }
        })
        .catch(error => {
            console.log(error);
        });
};


export const downloadPost = (userID, postID) => {
    // the URL for the request
    const url = `${API_HOST}/api/users/downloadedWorks/${ userID }`;
    const postJSON = {id: postID}
    // The data we are going to send in our request

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(postJSON),
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
                console.log("successfully downloaded post")
            } else {
                // If server couldn't add the student, tell the user.
                // Here we are adding a generic message, but you could be more specific in your app.
                console.log("failed to download post")
            }
        })
        .catch(error => {
            console.log(error);
        });
};

const setLastLogIn = (userID, time) => {
    // the URL for the request
    const url = `${API_HOST}/api/users/setLastLogIn/${ userID }`;
    const timeJSON = {time: time}
    // The data we are going to send in our request

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(timeJSON),
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
                console.log("successfully added lastLogIn")
            } else {
                // If server couldn't add the student, tell the user.
                // Here we are adding a generic message, but you could be more specific in your app.
                console.log("failed to to add lastLogIn")
            }
        })
        .catch(error => {
            console.log(error);
        });
};

