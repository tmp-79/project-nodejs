const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
    },
    language: {
        type: String,
    },
    description: {
        type: String,
    },
}, { timestamps: true });

const Category = mongoose.model('categories', categorySchema);

module.exports = Category;