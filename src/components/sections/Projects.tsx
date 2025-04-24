import React, { useState } from 'react';
import { projects } from '../../constants/data';
import { Code } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const toggleProject = (id: number) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium flex items-center gap-2"
                  >
                    <Code size={16} />
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className={`text-gray-600 text-sm ${activeProject === project.id ? '' : 'line-clamp-3'}`}>
                  {project.description}
                </p>
                {project.description.length > 150 && (
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2 focus:outline-none"
                  >
                    {activeProject === project.id ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;