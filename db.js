const mongoose = require("mongoose");
const mongoURL = 'mongodb://localhost:27017/hotels'    // tya url vr hotels nava cha databases create hoil

mongoose.connect(mongoURL)               // it is only use for establish the connection

const db= mongoose.connection;                // db ha mongoose cha default connection object create kela ahe use hote jeva pn by using 

db.on('connected',()=>
{
    console.log("Connected to mongoDB server....");
});

db.on('error',(err)=>
    {
        console.log("Connected to mongoDB server....".err);
    });


    db.on('disconnected',()=>
        {
            console.log("DisConnected to mongoDB server....");
        });

        module.exports=db;