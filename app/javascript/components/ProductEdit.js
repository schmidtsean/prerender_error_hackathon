import React from 'react';
const ProductEdit = ({ department, product }) => {
  const { id } = department
  const { name, description, price, stock } = product
  const defaultName = name ? name : "";
  const defaultDescription = description ? description: ""
  const defaultPrice = price ? price: 0.0
  const defaultStock = stock ? stock: 0
  return(
    <>
      <h1>Edit Product</h1>
      <form action={`/departments/${id}/products/${product.id}`} method="post">
        <input type="hidden" name="_method" value="patch"/>
        <input
          placeholder="Name"
          required
          type="text"
          defaultValue={defaultName}
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
        <button type="Submit">Update</button>
      </form>
    </>
  )
}

export default ProductEdit;