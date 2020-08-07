const express =require('express');
 const GuideData = require('./src/model/GuideData');
 const User = require('./src/model/user')
 const cors = require('cors');
 var bodyparser = require('body-parser');
 var app = new express();
 app.use(cors());
 app.use(bodyparser.json())


 //List
 app.get('/Guides',(req,res)=>{
     res.header("Access-Control-Allow-Origin","*")
     res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
 GuideData.find()
 .then(function(guides){
      res.send(guides);
 });

    });
    
    
  //add  
    app.post('/add',function(req,res){
        res.header("Access-Control-Allow-Origin","*")
   res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION")
   console.log(req.body);

   var guides = {
       Name:req.body.guides.Name,
       Languagesknown:req.body.guides.Languagesknown,
       Specialization:req.body.guides.Specialization,
       district:req.body.guides.district,
       phonenumber:req.body.guides.phonenumber,
       email:req.body.guides.email,
       price:req.body.guides.price,
     Rating:req.body.guides.Rating,
       Available:req.body.guides.Available

   }
   var guides = new GuideData(guides);
   guides.save()
   .then(function(guides){
       res.send(guides)
   })
    });




    app.get("/Guides/:id",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
GuideData.findById(req.params.id)
.then(function(guides){
     res.send(guides);
});

   });






//update
app.put('/edit',function(req,res,next){
res.header("Access-Control-Allow-Origin","*")
res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION")
const id =req.body.guides._id
var guides =
{
    Name:req.body.guides.Name,
    Languagesknown:req.body.guides.Languagesknown,
    Specialization:req.body.guides.Specialization,
    district:req.body.guides.district,
    phonenumber:req.body.guides.phonenumber,
    email:req.body.guides.email,
    price:req.body.guides.price,
    Rating:req.body.guides.Rating,
    Available:req.body.guides.Available
}
console.log(guides)
GuideData.findByIdAndUpdate(id,{$set:guides},(err,doc)=>
{
    if(!err){res.send(doc)}
    else{console.log("Error")}
})

})



//delete
   app.delete('/delete/:id',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION")
    console.log(req.params.id);
   
   GuideData.findByIdAndDelete(req.params.id,(err,doc)=>{
       if(!err){res.send(doc)}
       else{console.log("Error")}
   })
            
   
})


//register
app.post('/register',(req,res)=>{
    let userData =req.body;
    let user = new User(userData)
    user.save((err,registeredUser)=>{
        if(err){
            console.log(err);
        }
        else{
                let token ='user'
                res.status(200).send({token})
            }
           
        }
    )
})


//Login
app.post('/login',(req,res)=>{
    let userData = req.body
    User.findOne({email:userData.email},(err,user)=>{
        if(err){
            console.log(err)
        }else{
            if(!user){
                res.status(401).send('Invalid email')
                // alert("Invalid Email")
            }else
            if(user.password !== userData.password)
            {
                res.status(401).send('Invalid Password')
                // alert("Invalid Password")
            }
            else
            {
                if(user.email =='shareesh121@gmail.com' && user.password == 'aaa')
                {  
                    console.log("hi")
                    let token ='admin'
                    res.status(200).send({token,user})
                }
                else
                {
                    console.log("hi")
                    console.log(user.password)
                    let token ='user'
                    res.status(200).send({token,user})
                }
            }
        }
    })
})







    app.listen(3000,function(){
        console.log("listening to the port 3000");
    });
