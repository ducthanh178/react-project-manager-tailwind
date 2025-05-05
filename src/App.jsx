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
        <h1>Project Manager</h1>
        <AddProject />
        <ProjectList />
      </ProjectsDispatchContext.Provider>
    </ProjectsContext.Provider>
  );
}

export default App;
