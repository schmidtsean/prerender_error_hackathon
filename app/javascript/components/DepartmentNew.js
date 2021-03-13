import React from 'react';

const DepartmentNew = ({ department, user }) => {
  const { name } = department
  const { id } = user 
  const defaultName = name ? name : ""
  
  return (
    <>
      <h1>Add department</h1>
      <form action='/departments' method='post'>
        <input type="hidden" name="department[user_id]" value={id} />
        <input
          placeholder="name"
          type="text"
          defaultValue={defaultName}
          name="department[name]"
        />
        
        <button>
          Add department
         
        </button>
      </form>
    </>
  )
}

export default DepartmentNew;