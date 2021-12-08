const mongoose = require('mongoose')

const artistSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    profileName: String,
    usename: String
}, { _id : false });

const commentSchema = mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId, ref: 'User',
		required: true,
		minlegth: 1,
		trim: true,
        unique: true
	},

    profileName: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},

    comment: {
		type: String,
		required: true
	}
})


const Report = mongoose.model('Report', {
	// id: {
	// 	type: Number,
	// 	required: true,
    //     unique: true
	// },
   
	requestor: {
        type: artistSchema ,
        required: false
    },

	acceptor: {
        type:artistSchema ,
        required: false
    },

    isAccepted: {
        type: Boolean,
        required: true,
        default: false
    },

    comments: {
        type: [commentSchema],
        required: true,
        default: []
    }

  
})

module.exports = { Report }