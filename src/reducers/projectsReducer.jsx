export const projectsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [...state, { id: Date.now(), name: action.name, description: action.description, tasks: [] }];
    case 'EDIT_PROJECT':
      return state.map(p => p.id === action.id ? { ...p, name: action.name, description: action.description } : p);
    case 'DELETE_PROJECT':
      return state.filter(p => p.id !== action.id);
    case 'ADD_TASK':
      return state.map(p => p.id === action.projectId 
        ? { ...p, tasks: [...p.tasks, { id: Date.now(), name: action.name, completed: false }] } 
        : p);
    case 'EDIT_TASK':
      return state.map(p => p.id === action.projectId 
        ? {
            ...p,
            tasks: p.tasks.map(t => t.id === action.taskId ? { ...t, name: action.name } : t)
          }
        : p);
    case 'TOGGLE_TASK':
      return state.map(p => p.id === action.projectId 
        ? {
            ...p,
            tasks: p.tasks.map(t => t.id === action.taskId ? { ...t, completed: !t.completed } : t)
          }
        : p);
    case 'DELETE_TASK':
      return state.map(p => p.id === action.projectId 
        ? { ...p, tasks: p.tasks.filter(t => t.id !== action.taskId) } 
        : p);
    case 'MOVE_TASK_BETWEEN_PROJECTS':
      const sourceProject = state.find(p => p.id === action.sourceId);
      const taskToMove = sourceProject.tasks.find(t => t.id === action.taskId);
      return state.map(p => {
        if (p.id === action.sourceId) {
          return { ...p, tasks: p.tasks.filter(t => t.id !== action.taskId) };
        } else if (p.id === action.targetId) {
          return { ...p, tasks: [...p.tasks, taskToMove] };
        }
        return p;
      });
    default:
      return state;
  }
};
