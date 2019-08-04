import React, { useState, useEffect } from 'react'
import { SERVER_PRODUCT } from '../constant'
import axios from 'axios'


const Product = () => {
  const [products, setProducts] = useState([])

  const fetchProduct = async () => {
    const result = await axios(`${SERVER_PRODUCT}/test/products`)
    const { products } = result.data
    setProducts(products)
  }
  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <>
      Products
      {products.map(({id, name}) =>
        <blockquote key={id}>
          <p>{name}</p>
        </blockquote>
      )}
    </>
  )
}

export default Product
