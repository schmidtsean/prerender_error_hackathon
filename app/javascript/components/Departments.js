import React, { useReducer } from 'react';
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
            
            <div>
          <a href={`/departments/${a.id}`}>Show</a>
          <br />
          <a href={`/departments/${a.id}/edit`}>Edit</a>
          <br />
          <a
            href={`/departments/${a.id}`}
            data-method="delete"
            >
              Delete
            </a>
        </div>
         
        </li>
        ))}
      </ul>
    </>
  )
}

export default Departments;