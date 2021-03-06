import React from 'react';

const Product = ({ department, product }) => {
  const {title, id} = department;
  const {id, name, description, price, stock} = product
  return (
    <>
      <h1>Product: {product.name}</h1>
      <ul>
        <li>Description: {product.description}</li>
        <li>Price: {product.price}</li>
        <li>Stock: {product.stock}</li>
      </ul>
      <a href={`/departments/${department.id}/products/`}>back to Products from {title}</a>
      <br/>
    </>
  )
}

export default Product;