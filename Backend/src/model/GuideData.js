const mongoose =require('mongoose');
mongoose.connect("mongodb+srv://user_hareesh:Charmcaster@mycluster.zfaab.azure.mongodb.net/GuideDb?retryWrites=true&w=majority");
const Schema = mongoose.Schema;

var NewGuideSchema = new Schema({
  
         Name:String,
         Languagesknown:String,
         price:Number,
        district:String,
        phonenumber:Number,
        email:String,
        Specialization:String,
        Rating:Number,
       Available:String
});

module.exports = mongoose.model('GuideData',NewGuideSchema,'guides');

