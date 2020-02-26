// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Post = new Schema({
    partId: {
        type: String
    },
    material: {
        type: String
    },
    dimensions: {
        type: String
    },
    quantity: {
        type: Number
    },
    completionStatus:{
        type:Boolean
    }
}, 

{

    collection: 'posts'
});

module.exports = mongoose.model('Post', Post);