const { number } = require("joi");
const mongoose = require("mongoose");
const { type } = require("os");
const User = require("./user.js")

const Schema = mongoose.Schema;

const reviewschema = Schema({
    comment:String,
    rating:{
        type:Number,
        min:1,
        max:5
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    author:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }
});

const Review = mongoose.model("Review",reviewschema);
module.exports = Review;