'use client'
import React, { useState } from 'react'
import { Button } from './ui/button';


const CustomizeBtns = () => {
  const [quantity, setQuantity] = useState(0);
  const limit = 4

  return (
    <div className='flex items-center justify-between gap-4'>
      <Button className={`p-0 size-[40px] rounded-full text-2xl ${quantity === 0 && ' cursor-not-allowed'}`} variant={'primary'} onClick={() => {
        if (quantity != 0) {
          setQuantity(quantity - 1)
        }
      }}>-</Button>
      <span className='font-extrabold'>{quantity}</span>
      <Button className='p-0 size-[40px] rounded-full text-2xl' variant={'primary'} onClick={() => {
        if (quantity != limit) {
          setQuantity(quantity + 1)
        }
      }}>+</Button>
    </div>
  )
}

export default CustomizeBtns
