import React from 'react';

const ProductNew = ({ department, product }) => {
  const { id } = department
  const { name, errors } = product
  const defaultName = name ? name : ""
  const defaultDescription = description ? description : ""
  const defaultPrice = price ? price : 0
  const defaultStock = stock ? stock : 0
  return(
    <>
      <h1>New Product</h1>
      { errors && errors }
      <form action={`/departments/${id}/products`} method="post">
        <input
          placeholder="Name"
          defaultValue={defaultName}
          type="text"
          name="product[name]"
        />
        <textarea
          placeholder="Description"
          defaultValue={defaultDescription}
          name="product[description]"
        />
        <input
          placeholder="Price"
          defaultValue={defaultPrice}
          type="number"
          name="product[price]"
        />
        <input
          placeholder="Stock"
          defaultValue={defaultStock}
          type="number"
          name="product[stock]"
        />
        <button type="submit">Add Product</button>
      </form>
    </>
  )
}
export default ProductNew;