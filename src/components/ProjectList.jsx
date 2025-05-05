import React, { useContext } from 'react';
import { ProjectsContext } from '../context/ProjectsContext';
import ProjectItem from './ProjectItem';

function ProjectList() {
  const projects = useContext(ProjectsContext);

  return (
    <div>
      {projects.map(project => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
