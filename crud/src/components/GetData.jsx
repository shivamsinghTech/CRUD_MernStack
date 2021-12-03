import React, { useEffect, useState } from "react";




const GetData=()=>{

    // const[allData,setData]=useState([]);


    // const callGetData = async()=>{
    //     try{
    //       const res=await fetch('/getProduct',{
    //           method:"GET",
    
    //       headers:{
    //       Accept:"application/json",
    //       "Content-Type":"application/json"
    
    //     },
          
           
    //         } ) 
      
    //        const data=await res.json();
    //         console.log(data);
    //         setData(data);
    //         console.log(data);
      
    //   }
    
    //        catch(err){
    //       console.log(err)
        
    //     }
    //     }
    


    //     useEffect(()=>{


    //         callGetData();
    //     },[])



    return(<>

<div>

          <h2>Product List</h2>
          <table>
            <thead>
              <tr>
                <th>#ID</th>
                <th>Product Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
            {/* ,map((pr)=>{})
              {allData.map((product) =>{ return (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
               
                  <td>{product.price}</td>
                </tr>
              )})} */}
            </tbody>
          </table>

          </div>




    </>)
}

// export default  GetData;


