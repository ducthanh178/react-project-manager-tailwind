import React, { useContext, useState } from 'react';
import { ProjectsDispatchContext } from '../context/ProjectsDispatchContext';
import TaskList from './TaskList';

function ProjectItem({ project }) {
  const dispatch = useContext(ProjectsDispatchContext);
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);

  const handleDelete = () => dispatch({ type: 'DELETE_PROJECT', id: project.id });
  const handleEdit = () => {
    dispatch({ type: 'EDIT_PROJECT', id: project.id, name, description });
    setEditing(false);
  };

  return (
    <div className="bg-white shadow-md rounded p-4 mb-6">
      {isEditing ? (
        <div className="flex flex-col gap-2">
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="flex gap-2">
            <button
              onClick={handleEdit}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Lưu
            </button>
            <button
              onClick={() => setEditing(false)}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            >
              Hủy
            </button>
          </div>
        </div>
      ) : (
        <>
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="text-gray-600 mb-2">{project.description}</p>
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setEditing(true)}
              className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500"
            >
              Sửa
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Xóa
            </button>
          </div>
        </>
      )}
      <TaskList project={project} />
    </div>
  );
}

export default ProjectItem;
