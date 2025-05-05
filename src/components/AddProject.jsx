import React, { useState, useContext } from 'react';
import { ProjectsDispatchContext } from '../context/ProjectsDispatchContext';

function AddProject() {
  const dispatch = useContext(ProjectsDispatchContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_PROJECT', name, description });
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Tên dự án" required />
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Mô tả" required />
      <button type="submit">Thêm dự án</button>
    </form>
  );
}

export default AddProject;
