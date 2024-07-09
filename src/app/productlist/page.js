"use client"
import React,{useEffect, useState} from 'react'

const ProductList = () => {

const [productData, setProductData] = useState([]);

useEffect(()=>{
    
    async function getdata(){
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProductData(data.products);
    }
    
    getdata();
});
  return (
    <div className='p-4'>
      <h1 className='pb-4'>Product list</h1>

        {
            productData && productData.map((item)=>(
                <h3 key={item.id} className='text-blue-700'>{item.title}</h3>
            ))

        }

    </div>
  )
}

export default ProductList;
