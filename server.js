/* server.js for react-express-authentication */
"use strict";

/* Server environment setup */
// To run in development mode, run normally: node server.js
// To run in development with the test user logged in the backend, run: TEST_USER_ON=true node server.js
// To run in production mode, run in terminal: NODE_ENV=production node server.js
const env = process.env.NODE_ENV // read the environment variable (will be 'production' in production mode)

const USE_TEST_USER = env !== 'production' && process.env.TEST_USER_ON // option to turn on the test user.
const TEST_USER_ID = '5fb8b011b864666580b4efe3' // the id of our test user (you will have to replace it with a test user that you made). can also put this into a separate configutation file
const TEST_USER_EMAIL = 'test@user.com'
//////

const log = console.log;
const path = require('path')

const express = require("express");
// starting the express server
const app = express();

// enable CORS if in development, for React local development server to connect to the web server.
const cors = require('cors')
if (env !== 'production') { app.use(cors()) }
//app.use(cors())

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");
// mongoose.set('useFindAndModify', false); // for some deprecation issues

// import the mongoose models
const { Post } = require("./models/post");
const { User } = require("./models/user");

// to validate object IDs
const { ObjectID } = require("mongodb");

// multipart middleware: allows you to access uploaded file from req.file
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

// cloudinary: configure using credentials found on your Cloudinary Dashboard
// sign up for a free account here: https://cloudinary.com/users/register/free
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'drb9bln9e',
    api_key: '613421648522464',
    api_secret: 'u2mxWbV7NoXdDAo9pzfMh1lodw8'
});

// body-parser: middleware for parsing parts of the request into a usable object (onto req.body)
const bodyParser = require('body-parser') 
app.use(bodyParser.json({
    limit: '50mb'
  }));
  
  app.use(bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true 
  }));
  
// app.use(bodyParser.json()) // parsing JSON body
// app.use(bodyParser.urlencoded({ extended: true })); // parsing URL-encoded form data (from form POST requests)


// express-session for managing user sessions
const session = require("express-session");
const MongoStore = require('connect-mongo'); // to store session information on the database in production
//const { construct } = require('core-js/library/fn/reflect');


function isMongoError(error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
    return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
}

// middleware for mongo connection error for routes that need it
const mongoChecker = (req, res, next) => {
    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    } else {
        next()  
    }   
}

// Middleware for authentication of resources
const authenticate = (req, res, next) => {
    if (env !== 'production' && USE_TEST_USER)
        req.session.user = TEST_USER_ID // test user on development. (remember to run `TEST_USER_ON=true node server.js` if you want to use this user.)

    if (req.session.user) {
        User.findById(req.session.user).then((user) => {
            if (!user) {
                return Promise.reject()
            } else {
                req.user = user
                next()
            }
        }).catch((error) => {
            res.status(401).send("Unauthorized")
        })
    } else {
        res.status(401).send("Unauthorized")
    }
}


/*** Session handling **************************************/
// Create a session and session cookie
app.use(
    session({
        secret: process.env.SESSION_SECRET || "our hardcoded secret", // make a SESSION_SECRET environment variable when deploying (for example, on heroku)
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 600000,
            httpOnly: true
        },
        // store the sessions on the database in production
        store: env === 'production' ? MongoStore.create({
                                                mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/MusicCollabAPI'
                                 }) : null
    })
);

// A route to login and create a session
// A route to login and create a session
app.post("/users/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // log(email, password);
    // Use the static method on the User model to find a user
    // by their email and password
    User.findByUsernamePassword(username, password)
        .then(user => {
            // Add the user's id to the session.
            // We can check later if this exists to ensure we are logged in.
            req.session.user = user._id;
            req.session.username = user.username;
            req.session.isAdmin = user.isAdmin;
             // we will later send the email to the browser when checking if someone is logged in through GET /check-session (we will display it on the frontend dashboard. You could however also just send a boolean flag).
            res.send({ username: user.username,  isAdmin: user.isAdmin, id: user._id });
        })
        .catch(error => {
            res.status(400).send()
        });
});

// A route to logout a user
app.get("/users/logout", (req, res) => {
    // Remove the session
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send()
        }
    });
});

// A route to check if a user is logged in on the session
app.get("/users/check-session", (req, res) => {
    if (env !== 'production' && USE_TEST_USER) { // test user on development environment.
        req.session.user = TEST_USER_ID;
        req.session.email = TEST_USER_EMAIL;
        res.send({ currentUser: TEST_USER_EMAIL })
        return;
    }

    if (req.session.user) {
        res.send({ username: req.session.username,  isAdmin: req.session.isAdmin, id: req.session.user});
    } else {
        res.status(401).send();
    }
});

// A route to get user info
app.get("/users/details/:username", async (req, res) => {
    
    if(!req.params.username) {
        res.status(401).send('Invalid username provided');
        return;
    }
    
    const username = req.params.username;
    console.log("this is username: " + username)

	try {

		const user = await User.findOne({username: username})

        console.log("this is user details: " + user)
		
		if(!user) {
			res.status(404).send('Resource not found')
			return;
		}

        

		res.send(user)

	} catch(error) {
		log(error) // log server error to the console, not to the client.
		
        res.status(500).send(error) // 400 for bad request gets sent to client.
        return;
	}
	
});


// A route to get user info
app.get("/users/:id", async (req, res) => {
    
    if(!req.params.id) {
        res.status(401).send('Invalid id provided');
        return;
    }
    
    const id = req.params.id;

	try {

		const user = await User.findOne({_id: id})
		
		if(!user) {
			res.status(404).send('Resource not found')
			return;
		}

		res.send(user)

	} catch(error) {
		log(error) // log server error to the console, not to the client.
		
        res.status(500).send(error) // 400 for bad request gets sent to client.
        return;
	}
	
});


app.patch("/users/bio", async (req, res) => {

    const id = req.body.userId;
    const bio = req.body.biography;

	try {

        		
		const result = await User.findOneAndUpdate({_id: id} , {$set: {"biography" : bio }}, {new: true, useFindAndModify: false})


		if(!result) {
			res.status(404).send('Resource not found')
			return;
		}

        

		res.send(result)

	} catch(error) {
		log(error) // log server error to the console, not to the client.
        res.status(500).send(error) // 400 for bad request gets sent to client.
        return;
	}
	
});

app.patch("/users/updateCoverPhoto", multipartMiddleware, async (req, res) => {

    const id = req.body.userId;
    const imageId = req.body.imageId;

    if(!id) {
        return res.status(400).send("Invald IDs")
    }

	try {

        if(imageId) {
            await cloudinary.v2.uploader.destroy(
                imageId, // req.files contains uploaded files
                function (err, result) {
                    if(err) {
                        console.log(err)
                        return res.status(400).send(err)
                    }
                });
        }

        await cloudinary.v2.uploader.upload(
            req.files.image.path, // req.files contains uploaded files
            function async (err, result) {
                if(err) {
                    console.log(err)
                    return res.status(400).send(err)
                }
                // Create a new image using the Image mongoose model
                const img = {
                    imageId: result.public_id, // image id on cloudinary server
                    imageUrl: result.url, // image url on cloudinary server
                    createdOn: new Date(),
                };

                User.findOneAndUpdate({_id: id} , {$set: {"profilePhoto" : img }}, {new: true, useFindAndModify: false})
                    .then( result2 => {
                        if(!result2) {
                            res.status(404).send('Resource not found')
                            return;
                        }
        
                        res.send(result2)
                    })
            });


	} catch(error) {
		log(error) // log server error to the console, not to the client.
        res.status(500).send(error) // 400 for bad request gets sent to client.
        return;
	}
	
});

app.post('/users/getUsersByIds', async (req, res) => {
	// Add code here

    const ids = req.body.ids;

	try {
		
        const results = await User.find({
            '_id': {$in : ids}
        });

        results ? res.send(results) : res.status(404).send('Resource not found')

	} catch(error) {
		log(error) // log server error to the console, not to the client.
		if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
		}
	}

})

//add a user to another users followings list 
app.post('/users/addFollowing/:userId/:addedUserId', async (req, res) => {
	// Add code here


    const userId = req.params.userId;
    const addedUserId = req.params.addedUserId;


	try {
		
        const results = await User.findOneAndUpdate({_id: userId}, {$addToSet: {followings: addedUserId} }, {new: true, useFindAndModify: false})
        console.log(results)
        if(!results) {
			res.status(404).send('Resource not found')
			return;
		}

        const results2 = await User.findOneAndUpdate({_id: addedUserId}, {$addToSet: {followers: userId} }, {new: true, useFindAndModify: false})
        console.log(results2)
        results2 ? res.send(results2) : res.status(404).send('Resource not found')

	} catch(error) {
		log(error) // log server error to the console, not to the client.
		if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
		}
	}

})

app.delete('/users/removeFollowing/:userId/:addedUserId', async (req, res) => {
	// Add code here

    const userId = req.params.userId;
    const addedUserId = req.params.addedUserId;

	try {
		
        const results = await User.findOneAndUpdate({_id: userId}, {$pull: {followings: addedUserId} }, {new: true, useFindAndModify: false})

        if(!results) {
			res.status(404).send('Resource not found')
			return;
		}

        const results2 = await User.findOneAndUpdate({_id: addedUserId}, {$pull: {followers: userId} }, {new: true, useFindAndModify: false})

        results2 ? res.send(results2) : res.status(404).send('Resource not found')

	} catch(error) {
		log(error) // log server error to the console, not to the client.
		if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
		}
	}

})


/// Route for getting works for 1 user
app.get('/posts/usersPosts/:userId', async (req, res) => {
	// Add code here

	const userId = req.params.userId

	try {
		const post = await Post.find({"artist.id": userId})
		post ? res.send(post) : res.status(404).send('Resource not found')
	} catch(error) {
		log(error) // log server error to the console, not to the client.
		if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
		}
	}

})



//Posts routes

app.post('/posts/getWorksByIds', async (req, res) => {
	// Add code here

    const ids = req.body.ids;

	try {
		
        const results = await Post.find({
            '_id': {$in : ids}
        });

        results ? res.send(results) : res.status(404).send('Resource not found')

	} catch(error) {
		log(error) // log server error to the console, not to the client.
		if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
		}
	}

})


app.post('/posts', multipartMiddleware, async (req, res) => {
    log(`Adding post`)
 
    // Create a new student using the Student mongoose model
    const post = new Post({
        coverPhoto: {},
        audio: {},
        artist: {id: req.body.userId, profileName: req.body.artist},
        description: req.body.description,
        tags: JSON.parse(req.body.hashtags),
        categories: req.body.categories,
        references: JSON.parse(req.body.references),
        title: req.body.title
    })

    try {

        await cloudinary.v2.uploader.upload(
            req.files.originalImage.path, // req.files contains uploaded files
            function (err, result) {
                if(err) {
                    console.log(err)
                    return res.status(400).send(err)
                }
                // Create a new image using the Image mongoose model
                const img = {
                    imageId: result.public_id, // image id on cloudinary server
                    imageUrl: result.url, // image url on cloudinary server
                    createdOn: new Date(),
                };

                post.coverPhoto = img
            });

        console.log("uploaded image")

        await cloudinary.v2.uploader.upload(
            req.files.originalAudio.path, 
            {
                resource_type: "video",
            },
            function (err, result) {

                
                if(err) {
                    console.log(err)
                    return res.status(400).send(err)
                }

                // Create a new image using the Image mongoose model
                const audio = {
                    audioId: result.public_id, // image id on cloudinary server
                    audioUrl: result.url, // image url on cloudinary server
                    createdOn: new Date(),
                };

                post.audio = audio;
            });

        console.log("uploaded audio")


        const result = await post.save() 
        result ? res.send(result) :  res.status(400).send('Failed to add work')

    } catch(error) {
        log(error) // log server error to the console, not to the client.
        res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
    }
})


/*********************************************************/

/*** API Routes below ************************************/
// User API Route
// app.post('/api/users', mongoChecker, async (req, res) => {
//     log(req.body)

//     // Create a new user
//     const user = new User({
//         email: req.body.email,
//         password: req.body.password
//     })

//     try {
//         // Save the user
//         const newUser = await user.save()
//         res.send(newUser)
//     } catch (error) {
//         if (isMongoError(error)) { // check for if mongo server suddenly disconnected before this request.
//             res.status(500).send('Internal server error')
//         } else {
//             log(error)
//             res.status(400).send('Bad Request') // bad request for changing the student.
//         }
//     }
// })

/** User resource routes **/
// a POST route to *create* a user
app.post('/api/users', mongoChecker, async (req, res) => {
    log(`Adding user ${req.body.name}`)

    // Create a new student using the Student mongoose model
    const user = new User({
        username: req.body.username,
        profileName: req.body.profileName,
        email: req.body.email,
        interests: req.body.interests,
        password: req.body.password,
        isAdmin: req.body.isAdmin
    })


    // Save student to the database
    // async-await version:
    try {
        const result = await user.save() 
        res.send(result)
    } catch(error) {
        log(error) // log server error to the console, not to the client.
        if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
        }
    }
})

// a GET route to get all students
// app.get('/api/students', mongoChecker, authenticate, async (req, res) => {

//     // Get the students
//     try {
//         const students = await Student.find({creator: req.user._id})
//         // res.send(students) // just the array
//         res.send({ students }) // can wrap students in object if want to add more properties
//     } catch(error) {
//         log(error)
//         res.status(500).send("Internal Server Error")
//     }

// })

// other student API routes can go here...
// ...

/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(path.join(__dirname, "/client/build")));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/", "/LogIn", "/SignUp"];
    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404);
    }

    // send index.html
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

/*************************************************/
// Express server listening...
const port = process.env.PORT || 3000;
app.listen(port, () => {
    log(`Listening on port ${port}...`);
});
