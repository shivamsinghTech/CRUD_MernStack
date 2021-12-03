const mongoose=require('mongoose');


mongoose.connect('mongodb://localhost:27017/crud_api',
    {   
        // useCreateIndex:true,
        useNewUrlParser: true ,
        useUnifiedTopology: true,
        
        // useFindAndModify: false
        

         }
).then(()=>{
console.log("connection successfull")
}).catch((err)=>{console.log("connection failed")})






// useCreateIndex:true,
//           useFindAndModify:false