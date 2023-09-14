import React from 'react'
import { removeFromCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'

const CartComp = ({cart}) => {
  const dispatch = useDispatch();
  return (
    <div className='my-5 flex items-center justify-between'>
      <img className='w-[150px] h-[150px] object-contain' src={cart?.image} alt="" />
      <div className='w-[480px]'>
        <div className='text-xl'>{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className='font-bold text-2xl'>{cart?.price} <span>$</span> ({cart?.quantity})</div>
      <div onClick={()=> dispatch(removeFromCart(cart?.id))} className='bg-red-500 text-white w-[150px] cursor-pointer rounded-lg h-16 flex items-center justify-center'>DELETE</div>
    </div>
  )
}

export default CartComp