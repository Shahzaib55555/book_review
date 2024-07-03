
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: String,
    author: {type: String, required: true},
    ISBN: {type: Number, required: true},
    Review: {type: String, required: true}

})

module.exports = new mongoose.model("books", bookSchema)