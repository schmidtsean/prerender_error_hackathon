import React from 'react';

const DepartmentEdit = ({ department }) => {
  const { name, id } = department
  const defaultName = name ? name : "";
  return(
    <>
      <h1>Edit Playlist</h1>
      <form action={`/departments/${id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <input
          placeholder="Name"
          required
          type="text"
          defaultValue={defaultName}
          name="department[name]"
        />
        <button type="Submit">Update</button>
      </form>
    </>
  )
}

export default DepartmentEdit;