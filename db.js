const mongoose = require("mongoose");
 //const mongoURL = process.env.MONGODB_URL_LOCAL;    // tya url vr hotels nava cha databases create hoil
 require('dotenv').config();
const mongoURL=process.env.DB_URL;





mongoose.connect(mongoURL)
    .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Database connection error:', err));
             // it is only use for establish the connection

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