import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({product}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=> navigate(`products/${product?.id}`)} className='w-1/3 p-2 mb-2 border rounded-md relative cursor-pointer'>
      <div className='text-3xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-1 m-2'>{product?.price} <span className='text-2xl'>$</span></div>
      <img className='w-[200px] h-[200px] m-auto' src={product?.image} alt="" />
      <div className='text-center px-3 mt-3 text-xl font-bold'>{product?.title}</div>
    </div>
  )
}

export default Product