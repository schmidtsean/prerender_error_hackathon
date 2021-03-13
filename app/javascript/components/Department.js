import React from 'react';

const Department = ({ department }) => {
  const { id, name } = department;
 
  return (
    <>
      <h1>Department: {name}</h1>
     
      <a href="/">back</a>
      <br />
      <a href={`/departments/${id}/products`}>Products</a>
    </>
  )
}

export default Department;