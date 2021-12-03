/* User mongoose model */
const { Timestamp } = require('mongodb/lib/bson');
var bcrypt = require('bcryptjs');

const mongoose = require('mongoose')
// const FollowUser = mongoose.model('FollowUser', {
// 	username: {
// 		type: String,
// 		required: true,
// 		minlegth: 1,
// 		trim: true,
//         unique: true
// 	},

//     profileName: {
// 		type: String,
// 		required: true,
// 		minlegth: 1,
// 		trim: true
// 	},

//     coverPhotoUrl: {
//         type: String,
// 		required: false
//     }
// })

const UserSchema = new mongoose.Schema({
    isAdmin: {
        type: Boolean,
		required: true
    },

	username: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true,
        unique: true
	},

    password: {
		type: String,
		required: true,
		minlength: 1
	},

    profileName: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},

    email: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true,
        unique: true
	},

    profilePhotoUrl: {
        type: String,
		required: false
    },

    interests: {
        type: [String],
		required: false
    },

    uploadedWorks: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
        required: false
    },

    downloadedWorks: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
        required: false
    },

    likedWorks: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
        required: false
    },

	followers: {
        type: [String],
        required: false
    },

    followings: {
        type: [String],
        required: false
    },

    activityLog: {
        type: [String],
        required: false
    },

    lastLogIn: {
        type: String,
        required: true,
        default: 'Not Yet Logged In'
    }
})

// An example of Mongoose middleware.
// This function will run immediately prior to saving the document
// in the database.
UserSchema.pre('save', function(next) {
	const user = this; // binds this to User document instance

	// checks to ensure we don't hash password more than once
	if (user.isModified('password')) {
		// generate salt and hash the password
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hash) => {
				user.password = hash
				next()
			})
		})
	} else {
		next()
	}
})

// A static method on the document model.
// Allows us to find a User document by comparing the hashed password
//  to a given one, for example when logging in.
UserSchema.statics.findByUsernamePassword = function(username, password) {
	const User = this // binds this to the User model

	// First find the user by their email
	return User.findOne({ username: username }).then((user) => {
		if (!user) {
			return Promise.reject()  // a rejected promise
		}
		// if the user exists, make sure their password is correct
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, user.password, (err, result) => {
				if (result) {
					resolve(user)
				} else {
					reject()
				}
			})
		})
	})
}

// make a model using the User schema
const User = mongoose.model('User', UserSchema)
module.exports = { User }