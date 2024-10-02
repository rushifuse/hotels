const mongoose= require('mongoose');

const studentSchema = new mongoose.Schema({
     name:
     {
        type:String,

     },

     age:
     {
        type:Number
     },
     work:
     {
        type:String,
        enum:['student','teaching-staff', 'non-teaching-staff'],
        reuired:true,
     },
     mobile:
     {
        type:String,
      
     },
     email:
     {
        type:String,
      
     }
})

const Student=mongoose.model('Student',studentSchema);

module.exports=Student;