import React, { useContext } from 'react';
import { ProjectsContext } from '../context/ProjectsContext';
import ProjectItem from './ProjectItem';

function ProjectList() {
  const projects = useContext(ProjectsContext);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Danh sách dự án</h2>
      <div className="space-y-4">
        {projects.map(project => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
