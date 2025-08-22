import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Products = () => {
    const {cat}=useParams();
        const [productList,setProductList]=useState([]);

    useEffect(()=>{
            const fetchData=async()=>{
                    const res=await axios.get("http://localhost:3000/products");
                        const temp=res.data.filter((p)=>p.category===cat);
                    setProductList(temp);
            }
            fetchData();
    },[]);
    console.log(productList)
  return (
    <>
    <div className='grid grid-cols-4 pt-6 px-6 bg-gray-50'>
        {
        
        productList.map((item)=>(
            <div className='border h-150 w-90 mt-20 place-items-center '>
                <img className='h-100 w-50 mt-10' src={item.pimg}/>
                <h2 className='mt-10'>{item.pname}</h2>
                <p >Price - {item.pprice}</p>
                <button className='border w-50 ml-8 mt-6 '>Add to Cart</button>
            </div>
        ))
        
           }
    </div>
    
    </>
  )
}

export default Products
