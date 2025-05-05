import React, { useState, useContext } from 'react';
import { ProjectsDispatchContext } from '../context/ProjectsDispatchContext';
import TaskItem from './TaskItem';

function TaskList({ project }) {
  const dispatch = useContext(ProjectsDispatchContext);
  const [taskName, setTaskName] = useState('');

  const addTask = () => {
    if (!taskName.trim()) return;
    dispatch({ type: 'ADD_TASK', projectId: project.id, name: taskName });
    setTaskName('');
  };

  return (
    <div className="mt-4">
      <div className="flex gap-2 mb-3">
        <input
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
          placeholder="Tên nhiệm vụ"
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Thêm nhiệm vụ
        </button>
      </div>
      <ul className="space-y-2">
        {project.tasks.map(task => (
          <TaskItem key={task.id} task={task} projectId={project.id} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
