const mongoose =require("mongoose");

const URL= 'mongodb://localhost:27017/school'

mongoose.connect(URL)


const db=mongoose.connection;


db.on('connected',()=>
{
    console.log("mongoDB server is connected");
});

db.on('error',(err)=>
    {
        console.log("mongoDB server is error:"+err);
    });

db.on('disconnected',()=>
    {
      console.log("mongoDB server is disconnected");
    });



    module.exports=db;