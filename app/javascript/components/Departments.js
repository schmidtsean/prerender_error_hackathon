import React from 'react';
import Navbar from './Navbar';
const Departments = ({ user, department }) => {
  const { name } = user
  return (
    <>
      <Navbar />
      <h1 >Departments</h1>
      <h2>Welcome To {`${name}`}</h2>
      <hr />
      <br />
      <h3>Departments</h3>
      <ul>
        { department.map( (d) => (
            <li key={d.id}>
           {d.title}
          </li>
        ))}
      </ul>
    </>
  )
}
export default Departments;