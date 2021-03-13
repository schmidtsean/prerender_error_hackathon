import React from 'react';
import Navbar from './Navbar';

const Departments = ({ user, departments  }) => {
  const { first_name, last_name } = user
  return (
    <>
      <Navbar />
      <h1>Departments</h1>
      <h2>Welcome {`${first_name}  ${last_name}`}</h2>
      <hr />
      <a href="/departments/new">Add New Department</a>
      <br />
      <h3>Departments</h3>
      <ul>
        { departments.map( (a) => (
          <li key={a.id}>
            {a.title} 
          </li>
          
        ))}
      </ul>
    </>
  )
}

export default Departments;