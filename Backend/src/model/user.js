const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://user_hareesh:Charmcaster@mycluster.zfaab.azure.mongodb.net/GuideDb?retryWrites=true&w=majority");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    Name:String,
    Username:String,
    Phone:Number,
    email:String,
    password:String
})
module.exports=mongoose.model('user',userSchema,'users');