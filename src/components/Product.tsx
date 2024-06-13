import Image from 'next/image'
import React, { FC } from 'react'
import { Button } from './ui/button'
import BasicRating from './ui/rating'
import CustomizeBtns from './CustomizeBtns'

interface ProductProps {
  orange: string,
  black: string,
  img: string,
  price: string,
  rating: string,
  type: string
}

const Product : FC<ProductProps> = ({
  orange,
  black,
  img,
  price,
  rating,
  type
}) => {
  return (
    <div className={`relative ${type === 'BUY' ? 'w-[300px] h-[420px] lg:h-[360px]' : 'min-h-[500px] h-max w-[300px] rounded-t-full border-[3px] border-primary border-dashed'}  bg-l_orange rounded-2xl py-6 px-4`}>
      <div className={`relative w-full flex items-center justify-center pb-2 ${type === 'BUY' ? 'lg:h-[160px] h-max' : 'size-max'}`}>
        <Image src={img} alt='' width={225} height={200} className={`object-contain ${type === 'BUY' ? 'lg:absolute -top-[50%] -right-20' : ''}`}/>
      </div>
      <div className={`flex flex-col ${type === 'BUY' ? '': 'items-center justify-center text-center'}`}>
        <h3 className='text-2xl font-semibold'><span className='text-primary'>{orange}</span> {black}</h3>
        <div className={`flex  items-center gap-4 my-2`}>
          <BasicRating rate={Number(rating)}/>
          <span className='font-semibold'>({rating})</span>
        </div>
        <div className={`flex justify-between items-center ${type === 'BUY' ? '': 'flex-col gap-4'}`}>
          <h2 className='text-3xl font-bold'>{price}</h2>
          {type === 'ADDTOCART' && <CustomizeBtns />}
          <Button variant={'primary'}>{type === 'BUY' ? 'Buy Now': 'ADD TO CART'}</Button>
        </div>
      </div>
    </div>
  )
}

export default Product
