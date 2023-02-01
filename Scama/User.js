const mongoose=require("mongoose");


const datascama= new mongoose.Schema({

    name:String,
    email:String,
    message:String
});

module.exports= mongoose.model("userdatas",datascama);