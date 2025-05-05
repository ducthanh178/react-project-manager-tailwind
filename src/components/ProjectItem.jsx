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
    <div>
      {isEditing ? (
        <>
          <input value={name} onChange={e => setName(e.target.value)} />
          <input value={description} onChange={e => setDescription(e.target.value)} />
          <button onClick={handleEdit}>Lưu</button>
        </>
      ) : (
        <>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <button onClick={() => setEditing(true)}>Sửa</button>
          <button onClick={handleDelete}>Xóa</button>
        </>
      )}
      <TaskList project={project} />
    </div>
  );
}

export default ProjectItem;
