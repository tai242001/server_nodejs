const mongoose = require("mongoose");



const UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
});


const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number
    },
    bag: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Bag"
        }
    ]
});



const BagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
    },

    genres: {
        type: [String]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    },

});
let Bag = mongoose.model("Bag", BagSchema);
let Author = mongoose.model("Author", AuthorSchema);
let User = mongoose.model("User", UserSchema);
module.exports = { Bag, Author, User };