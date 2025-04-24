import React from 'react';
import { skills } from '../../constants/data';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Skills with Progress Bars */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              Languages & Databases
            </h3>
            <div className="space-y-4">
              {skills.technical.map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {/* Tools & Libraries */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                Tools & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool) => (
                  <span 
                    key={tool.id}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Soft Skills */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((soft) => (
                  <span 
                    key={soft.id}
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                  >
                    {soft.name}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Other Skills */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                Other Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.other.map((other) => (
                  <span 
                    key={other.id}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                  >
                    {other.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;