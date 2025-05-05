import React, { useReducer } from 'react';
import { ProjectsContext } from './context/ProjectsContext';
import { ProjectsDispatchContext } from './context/ProjectsDispatchContext';
import { projectsReducer } from './reducers/projectsReducer';
import AddProject from './components/AddProject';
import ProjectList from './components/ProjectList';

function App() {
  const [projects, dispatch] = useReducer(projectsReducer, []);

  return (
    <ProjectsContext.Provider value={projects}>
      <ProjectsDispatchContext.Provider value={dispatch}>
        <div className="min-h-screen bg-gray-100 p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Project Manager</h1>
          <AddProject />
          <ProjectList />
        </div>
      </ProjectsDispatchContext.Provider>
    </ProjectsContext.Provider>
  );
}

export default App;
