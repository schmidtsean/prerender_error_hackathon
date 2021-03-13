import React from 'react';

const ProductNew = ({ department, product }) => {
  const { id } = department
  const { name, errors } = product
  const defaultName = name ? name : ""
  const defaultDescription = description ? description: ""
  const defaultPrice = price ? price: 0.0
  const defaultStock = stock ? stock: 0
  return(
    <>
      <h1>New Product</h1>
      { errors && errors }
      <form action={`/department/${id}/products`} method="post">
        <input
          placeholder="name"
          defaultValue={defaultName}
          type="text"
          name="product[name]"
        />
        <input
          placeholder="description"
          defaultValue={defaultDescription}
          type="text"
          name="product[description]"
        />
        <input
          placeholder="price"
          defaultValue={defaultPrice}
          type="text"
          name="product[price]"
        />
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