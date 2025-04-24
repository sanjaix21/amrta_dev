import React from 'react';
import { education } from '../../constants/data';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-500 pl-8 ml-4 md:ml-8 space-y-10">
            {education.map((edu) => (
              <div 
                key={edu.id} 
                className="relative bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute -left-12 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-white" size={18} />
                </div>
                <div className="flex items-center mb-2 text-blue-600">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm font-medium">{edu.period}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{edu.institution}</h3>
                <p className="text-gray-700 mb-2">{edu.degree}</p>
                <p className="text-gray-500 text-sm">{edu.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;