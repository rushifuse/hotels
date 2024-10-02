const express=require('express');
const router=express.Router();

const Person= require('./../models/person');

router.post('/', async (req,res)=>
    {
       try{
        const data=req.body
    
       const newPerson = new Person(data);
       
       const response = await newPerson.save();
       console.log('data saved');
       res.status(200).json(response);
    
       } catch(err)
       {
        console.log(err);
        res.status(500).json({error:'internal server error'});
       }
     });
    
    
    
    
        router.get('/', async (req,res)=>
            {
               try{
               const data = await Person.find();
               console.log('data fetched');
               res.status(200).json(data);
            
               } catch(err)
               {
                console.log(err);
                res.status(500).json({error:'internal server error'});
               }
            
                 });



                 router.get('/:workType',async (req,res)=>{

                    try
                    {
                            const workType=req.params.workType;
                            if(workType=='chef'||workType=='manager'||workType=='waiter')
                            {
                                  const respone =await Person.find({work:workType});
                                  console.log('respone fetched')
                ;                  res.status(200).json(respone);
                

                            }
                            else{ 
                                res.status(400).json({error:'invalid work type'});
                
                            }
                
                    }
                    catch(err)
                    {
                        console.log(err);
                        res.status(500).json({error:'internal server error'});
                    }
                
                });
                
    router.put('/:id', async(req,res)=>
    {
     try{
    const personId = req.params.id;
    const updatedPersonData = req.body;
     
        const respone = await Person.findByIdAndUpdate(personId,updatedPersonData ,  
            {
                new:true,
                runValidators:true,
            }
        );


if(!respone)
{
    return res.status(404).json({error:'person not found  '});
}





 
console.log('data updated');
res.status(200).json(respone);
     }
     catch(err)
     {
  
        console.log(err);
        res.status(500).json({error:'internal server error'});


     }
    })



    router.delete('/:id', async(req,res)=>
        {
         try{
        const personId = req.params.id;
        const updatedPersonData = req.body;
         
            const respone = await Person.findByIdAndDelete(personId);
        
        if(!respone)
            {
                return res.status(404).json({error:'person not found  '});
            }
            
        
             
            console.log('data delete');
            res.status(200).json({message:'person Delete Successfully'});
                 }
                 catch(err)
                 {
              
                    console.log(err);
                    res.status(500).json({error:'internal server error'});
            
            
                 }
                })





                module.exports=router;