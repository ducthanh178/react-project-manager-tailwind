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
    <li className="flex items-center justify-between bg-white shadow p-3 rounded mb-2">
      {isEditing ? (
        <div className="flex items-center gap-2 w-full">
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="flex-1 border border-gray-300 rounded px-2 py-1"
          />
          <button
            onClick={editTask}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
          >
            Lưu
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between w-full">
          <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : ''}`}>
            {task.name}
          </span>
          <div className="flex gap-2">
            <button
              onClick={toggle}
              className="text-green-600 hover:text-green-800 font-bold"
              title="Hoàn thành"
            >
              ✔
            </button>
            <button
              onClick={() => setEditing(true)}
              className="text-yellow-500 hover:text-yellow-700"
              title="Chỉnh sửa"
            >
              ✏️
            </button>
            <button
              onClick={deleteTask}
              className="text-red-500 hover:text-red-700"
              title="Xóa"
            >
              🗑
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default TaskItem;
