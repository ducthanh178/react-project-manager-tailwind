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
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md flex flex-col gap-4 w-full max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold text-center">Thêm dự án</h2>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Tên dự án"
        required
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Mô tả"
        required
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-medium py-2 rounded hover:bg-blue-600 transition"
      >
        Thêm dự án
      </button>
    </form>
  );
}

export default AddProject;
