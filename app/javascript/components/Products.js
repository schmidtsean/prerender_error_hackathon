import React from 'react';

const Products = ({ department, products }) => {
  const { title, id } = department
  return(
    <>
      <h1>Products from {title}</h1>
      <a href={`/departments/${id}/products/new`}>New Product</a>
      <br />
      <a href={`/departments/${id}`}>Back to {title}</a>
      <div>
      { products.map( (product) => 
        <div>
          <div key={product.id}>
            <h3>{product.name}</h3>
            <div>
              <a href={`/departments/${id}/products/${product.id}`}>Show</a>
              <br />
              <a href={`/departments/${id}/products/${product.id}/edit`}>Edit</a>
              <br />
              <a
              href={`/departments/${id}/products/${product.id}`}
              data-method="delete">Delete</a>
            </div>
          </div>
        </div>
        )}
      </div>
    </>
  )
}
export default Products;