const mongoose=require('mongoose');

// Define the person schema
const personSchema=new mongoose.Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
       
    },
    mobile: {
        type: String,
        
    },
    work: {
        type: String,
      
    },
    address:{
        type: String,
       
    },
    salary: {
        type: Number,
  
    }
});

const Person = mongoose.model('Person',personSchema);
module.exports=Person;







