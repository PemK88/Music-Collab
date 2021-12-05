/* User mongoose model */
const mongoose = require('mongoose')

// const ReferencePost = mongoose.model('ReferencePost', {
// 	id: {
// 		type: Number,
// 		required: true,
//         unique: true
// 	},

//     description: {
// 		type: String,
// 		required: false,
// 	}
// })

// const Comment = mongoose.model('Comment', {
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

//     comment: {
// 		type: String,
// 		required: true
// 	}
// })

const artistSchema = new mongoose.Schema({
    id: String,
    profileName: String
}, { _id : false });

const Post = mongoose.model('Post', {
	// id: {
	// 	type: Number,
	// 	required: true,
    //     unique: true
	// },

    coverPhotoUrl: {
        type: String,
		required: false
    },

    audioUrl: {
        type: String,
		required: true
    },

    title: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},

    artist: {
		type: artistSchema,
		required: true,
		trim: true
	},

    description: {
		type: String,
		required: false,
	},

    recievedLikes: {
        type: [String],
        required: true,
        default: []
    },

    categories: {
        type: [String],
		required: true,
        default: []
    },

    tags: {
        type: [String],
		required: true,
        default: []
    },

    references: {
        type: [Object],
        required: true,
        default: []
    },

    comments: {
        type: [String],
        required: true,
        default: []
    }

})


module.exports = { Post }