const { Router } = require('express');
const express=require('express');
const router=express.Router();


require("../DB/conn")
const User=require('../Model/UserSchema')





//post operation


router.post("/register", async(req,res)=>{

    const{name,price}=req.body;
        if(!name ||!price)
        {
            return res.status(422).json({error:"please filled the all fields"})
        }
      if(isNaN(price)){
               return res.status(420).json({error:"Price should be a number"})
        }


     try{
               
            const user=new User({name,price})
                    await user.save()
                    
                    res.status(201).json({message:"Data Inserted successfully"})
                    console.log(user)
    }
                 catch(e){console.log(e)}

    }
)



// get 
// .sort( { name: -1 } 

// !  get data for home page and Contact us page
router.get("/getProduct",async(req,res)=>{
    console.log("hello get data");
    const getAllData=await User.find().sort({_id:-1});
    res.status(200).send(getAllData);

    console.log(getAllData);
    });



    // get Data by Id

    router.get("/getProductById/:id",async(req,res)=>{
        try{
            const _id=req.params.id;
            const productDataById=await User.findById(_id);
            if(!productDataById){
                return res.status(405).send();
            }

            else{
                res.status(201).send(productDataById);
            }
        }
            catch(e){console.log(e)}


        
    })

   

    router.patch("/updateData/:id",async(req,res)=>{

       
            const _id=req.params.id;
            const{name,price}=req.body;
            console.log(req.body);
            if(!name || !price){

              return  res.status(401).json("please filled all the field");
            }
            else{
            try{
                
                const updateData=await User.findByIdAndUpdate(_id,req.body,{new:true})
    
                res.status(201).send(updateData)


            }
        
            
    
    catch(e){console.log(e)}
        }
    
    
    })





    router.delete("/delProduct/:id",async(req,res)=>{
		
		const _id=req.params.id;
		try{
			const delData=await User.findByIdAndDelete(req.params.id);

			if(!req.params.id){
				res.status(400).send("data not found")
				}
		else{
			res.send(delData)
}
}
			catch(e){console.log(e)}
})


    






module.exports=router;