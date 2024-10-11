const { string, required } = require("joi");
const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;
const passportlocalmongoose = require("passport-local-mongoose");

const userschema = new Schema({
    email:{
        type:String,
        required:true,
    },
});
// schema is attached with passport-local-mongoose
userschema.plugin(passportlocalmongoose);
module.exports = mongoose.model("User",userschema);