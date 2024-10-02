//  var  fs =require('fs');
//  var  os =require('os');


// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt','hi my self'+ user.username+'!',()=>

// {
// console.log("file created");
// });


// const note = require('./practice1');
// console.log(note.age);


const express = require('express');
const app = express();
const db=require('./data');
const student= require('./models/Student');

const bodyParser=require('body-parser');
app.use(bodyParser.json());


app.get('/',function(req,res)
{
res.send("This is kitchen chef ready to take order");

})



app.post('/student',async(req,res)=>
{

    try{
        const data = req.body // Assuming the request body contain the person data

        const newStudent =new student(data);
    
        const  response = await newStudent.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch{

        console.log(err);
        res.status(500).json({error:'internal server error'});
    }

});

app.get('/student', async (req,res)=>
    {
       try{
       const data = await student.find();
       console.log('data fetched');
       res.status(200).json(data);
    
       } catch(err)
       {
        console.log(err);
        res.status(500).json({error:'internal server error'});
       }
    
         });

app.listen(3000, function()
{
console.log("server is created");
});