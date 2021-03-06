import React from 'react';

const DepartmentEdit = ({ department }) => {
  const { title, id } = department
  const defaultTitle = title ? title : "";
  return(
    <>
      <h1>Edit Department</h1>
      <form action={`/departments/${id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <input
          placeholder="Title"
          required
          type="text"
          defaultValue={defaultTitle}
          name="department[title]"
        />
        <button type="Submit">Update</button>
      </form>
    </>
  )
}

export default DepartmentEdit;