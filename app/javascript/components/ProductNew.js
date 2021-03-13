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
      <input type="hidden" name="department[user_id]" value={id} />
        <input
          placeholder="Name"
          defaultValue={defaultName}
          type="text"
          name="product[name]"
        /><br/>
        <textarea
          placeholder="Description"
          defaultValue={defaultDescription}
          name="product[description]"
        /><br/>
        <input
          placeholder="Price"
          defaultValue={defaultPrice}
          type="number"
          name="product[price]"
        /><br/>
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