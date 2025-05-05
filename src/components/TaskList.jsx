import React, { useState, useContext } from 'react';
import { ProjectsDispatchContext } from '../context/ProjectsDispatchContext';
import TaskItem from './TaskItem';

function TaskList({ project }) {
  const dispatch = useContext(ProjectsDispatchContext);
  const [taskName, setTaskName] = useState('');

  const addTask = () => {
    dispatch({ type: 'ADD_TASK', projectId: project.id, name: taskName });
    setTaskName('');
  };

  return (
    <div>
      <input value={taskName} onChange={e => setTaskName(e.target.value)} placeholder="Tên nhiệm vụ" />
      <button onClick={addTask}>Thêm nhiệm vụ</button>
      <ul>
        {project.tasks.map(task => (
          <TaskItem key={task.id} task={task} projectId={project.id} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
