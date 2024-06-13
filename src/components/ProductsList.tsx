import React from 'react'
import Product from './Product'
import { products, ProductsListProps } from '../../constants'



const ProductsList: React.FC<ProductsListProps> = ({ type , limit}) => {
  return (
    <div className={`flex mt-10 py-12 items-center ${type === 'BUY' && 'lg:justify-between'} justify-center lg:gap-20 gap-8 flex-wrap lg:px-10`}>
      {
        products.slice(0, limit  ).map((e) => { 
          return (
            <Product 
              key={e.orange} 
              orange={e.orange} 
              black={e.black}
              img={e.img}
              price={e.price}
              rating={e.rating}
              type={type}
            />
          )
        })
      }
    </div>
  )
}

export default ProductsList
