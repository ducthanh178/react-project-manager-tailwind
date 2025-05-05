import React, { useContext, useState } from 'react';
import { ProjectsDispatchContext } from '../context/ProjectsDispatchContext';

function TaskItem({ task, projectId }) {
  const dispatch = useContext(ProjectsDispatchContext);
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState(task.name);

  const toggle = () => dispatch({ type: 'TOGGLE_TASK', projectId, taskId: task.id });
  const deleteTask = () => dispatch({ type: 'DELETE_TASK', projectId, taskId: task.id });
  const editTask = () => {
    dispatch({ type: 'EDIT_TASK', projectId, taskId: task.id, name });
    setEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input value={name} onChange={e => setName(e.target.value)} />
          <button onClick={editTask}>Lưu</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.name}</span>
          <button onClick={toggle}>✔</button>
          <button onClick={() => setEditing(true)}>✏️</button>
          <button onClick={deleteTask}>🗑</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
