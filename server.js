                              //  Function
/*function add(a,b)
{
    return  a+b;
}

let c=add(5,7);
console.log(c);
*/


/*var add=(a,b)=>a+b;
var result=add(a,b);
console.log(result);
*/


/*
const add= function(a,b,rushi)
{
    var result=a+b;
    console.log('result:-'+result);
    rushi();
}
 
add(2,3 ,()=>
{
console.log('Function excuted');
});

*/


/*
var fs= require('fs');
var os= require('os');

var user= os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('greeting.txt','Hi'+user.username+'!\n',()=>
{
    console.log('file is created');
});  
*/



/*

const node = require('./note.js');
console.log("server file is avaiable");

*/

/*
var _=require('lodash');

var data=[1,2,3,'R','U','S',1,2,3,'R'];
var unique = _.uniq(data);
console.log(unique);
*/



/*
const jsonString={
    name:"Alice",
    age:25
};

const json = JSON.stringify(jsonString);
console.log(json);
   
*/


/*
const json='{"name":"Rahul","roll":"101"}';
const data=JSON.parse(json);
console.log(data.name);
*/


/*
const express=require('express');
const app=express();

app.get('/',function(req,res)
{
res.send('Welcome my server...... ');
});

app.get('/chiken',function(req,res)
{
res.send('Welcome to my hotel...... ');
});


app.listen(3000 , function(){
    console.log("server start in this port:-");
});
*/

/*

const express = require('express');
const app = express();


app.get('/',function(req,res)
{
res.send('Welcome my server...... ');
});

app.post('/items',(req,res)=>
{
    res.send("Data is save .......");
});

app.listen(3000, function()
{
console.log("server is Started :-");
});


*/





const express = require('express');
const app= express();
const db= require('./db');
const Person = require('./models/person');


const bodyParser = require('body-parser');
app.use(bodyParser.json());   


const MenuItem= require('./models/MenuItem');
const { reverse } = require('lodash');



app.get('/',function(req,res)
{
res.send("welcome to our hotels");
})




            
                
 const personRoutes=require('./routes/personRoutes');
 app.use('/person', personRoutes)


const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes);



app.listen(3000,()=>
{
    console.log("Server is started successfully ........");
});











