import React from 'react';

const ProductNew = ({ department, product }) => {
  const { id } = department
  const { name, description, price, stock, errors } = product
  const defaultName = name ? name : ""
  const defaultDescription = description ? description : ""
  const defaultPrice = price ? price : ""
  const defaultStock = stock ? stock : ""
  return(
    <>
      <h1>New Product</h1>
      { errors && errors }
      <form action={`/departments/${id}/products`} method="post">
        <input
          placeholder="name"
          defaultValue={defaultName}
          type="text"
          name="product[name]"
        /><br/>
        <input
          placeholder="description"
          defaultValue={defaultDescription}
          type="text"
          name="product[description]"
        /><br/>
        <input
          placeholder="price"
          defaultValue={defaultPrice}
          type="text"
          name="product[price]"
        /><br/>
        <input
          placeholder="stock"
          defaultValue={defaultStock}
          type="text"
          name="product[stock]"
        />
        <button type="submit">Add Product</button>
      </form>
    </>
  )
}
export default ProductNew;