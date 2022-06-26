const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const templateSchema = new Schema({
    name: {
        type: String,
    },
    image: {
        type: Array,
    },
    purchases: {
        type: String,
    },
    views: {
        type: String
    },
    language: {
        type: Array
    },
    description: {
        type: String
    },
    price: {
        type: String
    }
}, { timestamps: true });

const Template = mongoose.model('templates', templateSchema);

module.exports = Template;