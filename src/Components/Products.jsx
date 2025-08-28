import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


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
    <div className='grid grid-cols-4 pt-6 px-6 bg-gray-50 '>
        {
        
        productList.map((item)=>(
            <div className='border h-100 w-70 mt-20 ml-12 place-items-center '>
                <img className='h-60 w-40 mt-2' src={item.pimg}/>
                <h2 className='mt-10' style={{ fontFamily: "'Roboto', sans-serif,Marcellus" }}>{item.pname}</h2>
                <p className='mb-5'>Price - {item.pprice}</p>
                {/* <button className='border w-50 ml-8 mt-6 hover:text-pink-600 ' >Add to Cart</button> */}
                <Link to={`/cart`} className='border w-80 py-2  px-5 hover:text-pink-600 '>Add to Cart</Link>
            </div>
        ))
        
           }
    </div>
    
    </>
  )
}

export default Products
