import React from 'react';

const DepartmentNew = ({ department, user }) => {
  const { title } = department
  const { id } = user 
  const defaultTitle= title ? title : ""
  
  return (
    <>
      <h1>Add Department</h1>
      <form action='/departments' method='post'>
        <input type="hidden" title="department[user_id]" value={id} />
        <input
          placeholder="Title"
          type="text"
          defaultValue={defaultTitle}
          title="department[title]"
        />
        
        <button>
          Add Department
      
        </button>
      </form>
    </>
  )
}

export default DepartmentNew;