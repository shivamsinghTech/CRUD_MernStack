import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import GetData from "./GetData";

import axios from 'axios';
import {Link} from 'react-router-dom';





const CreateData=()=>{

    const [data,setData]=useState({
        name:"",
        price:""
    })

    const[allData,setGetData]=useState([]);

    const inputChange=(event)=>{
                    const name=event.target.name;
                    const value=event.target.value;
                    console.log([name],value)


                    setData({...data,[name]:value})
                    console.log(data)
                                 }

                                 //submit button for practice
    //  const clickSubmit=(k)=>{
    //                  k.preventDefault();
    //                  if(data.name==="" || data.price===""){
    //                                     alert("Please enter the all the field");
    //                                 }
    //                  else{
    //                          console.log(data);
    //                       }  
    //                      }


    

// !   get Data from APi

    const callGetData = async()=>{
        try{
          const res=await fetch('/getProduct',{
              method:"GET",
          headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
            } ) 
      
           const data=await res.json();
            console.log(data);
            setGetData(data);
            console.log(data);
      }
           catch(err){
          console.log(err)
        
        }
        }
    

      // TODO  Register the data to api


                        const PostData= async(e)=>{
                            e.preventDefault();
                           console.log(data)
                           const{name,price}=data;
                           const res=await fetch("/register",{
                            method:"POST",
                            headers:{"Content-Type":"application/json"},
                            body:JSON.stringify({  name ,price})})
                            const dataRes=await res.json();
                                if(res.status===422 || !dataRes){  
                                    alert("please filled the all fields")
                                }
                                else if(res.status===420 ){
                                    alert("Price should be a number")
                                }
                                else  {
                                      alert(" Registered SUCCESSFULLY")
                                      setData({name:"",price:""});
                                      callGetData();
                                         }
                        }


                      // TODO:  Delete method del data by Id


                        const deleteRecord = (productId) =>
                        {
                          axios.delete(`/delProduct/${productId}`)
                          .then((result)=>{
                            callGetData();
                          })
                          .catch(()=>{
                            alert('Error in the Code');
                          });
                        };


                        // !  
                            useEffect(()=>{
                                callGetData();
                            },[])
                    
                    





    return(<>
                <div>
            <div className="container main">
                <form method="POST" className="form-inline" >

                <h2 calssname="text-center ml-4">Create  Data</h2>

                     <div className="form-group">
                        <label htmlFor="name" >Product Name:</label>
                             <input type="text" className="form-control" id="name" name="name" placeholder="Enter Product Name" value={data.name} onChange={inputChange}/>
                     </div>


                    <div className="form-group">
                      <label htmlFor="price">Product Price:</label>
                         <input type="number" className="form-control" id="price" name="price" placeholder="Enter Product Price" value={data.price} onChange={inputChange}/>
                     </div>


                     <button type="submit" onClick={PostData} className="btn btn-primary mt-3">Submit</button>

                 </form>

            </div>
            
  



{/*  All below code is use for Display the Data*/}


<div>
<h2  className="text-center  ml-4 mt-4  mb-5">Product List</h2>
<table className="table table-hover  table-striped table-bordered ml-4 ">
  <thead>
    <tr>
      <th>#ID</th>
      <th>Product Name</th>
      <th>Price</th>
      <th>Update</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
  

    {allData.map((product,id) =>{ return (
      <tr key={product._id}>
        <td>{product._id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
              <Link className=" mr-2" to={`/updateProduct/editID/${product._id}`}>
               <button> Edit</button> 
               </Link>
        </td>


        <td>
               <button className="btn btn-danger" onClick={()=>{  deleteRecord(product._id)}} >Delete</button>
           </td>

      </tr>
    )})}
  </tbody>
</table>

</div>


{/* display data part end here */}
            </div>



    </>)
}
export default CreateData;