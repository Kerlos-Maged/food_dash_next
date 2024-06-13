import ProductsList from '@/components/ProductsList'
import React from 'react'
import { fakeData, types } from '../../../../../constants'

const MenuPage = () => {
  return (
    <>
      <section className="py-12">
        <div className="container flex flex-col">
          {
            fakeData.map((e)=>{
              return (
                <div className="" key={e.name}>
                    <div className="text-center">
                      <h2 className='text-4xl font-extrabold text-font-black'>Our <span className='text-primary'>{e.name}</span></h2>
                    </div>
                    <div className="">
                      <ProductsList type={types.ADDTOCART} limit={e.limit}/>
                    </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default MenuPage
