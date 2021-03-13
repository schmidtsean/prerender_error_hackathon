import React from 'react';

const Department = ({ department }) => {
  const { id, title } = department;
 
  return (
    <>
      <h1>Department: {title}</h1>
     
      <a href="/">back</a>
      <br />
      <a href={`/departments/${id}/products`}>Products</a>
    </>
  )
}

export default Department;