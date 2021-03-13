import React from 'react';

const Product = ({ department, product }) => {
  const {title, id} = department;
  return (
    <>
      <h1>Product: {product.name}</h1>
      <p>
        created: {product.created_at}, id: {product.id}
      </p>
      <a href={`/departments/${department.id}/products/`}>back to Products from {title}</a>
      <br/>
      <a href={`/products/${product.id}/reviews`}>Reviews</a>
    </>
  )
}

export default Product;