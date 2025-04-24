import React from 'react';
import { certifications } from '../../constants/data';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <a 
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="bg-blue-600 p-4 flex items-center justify-between">
                <Award className="text-white" size={20} />
                <div className="flex items-center text-white text-sm">
                  <Calendar size={14} className="mr-1" />
                  <span>{cert.date}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{cert.title}</h3>
                  <ExternalLink size={16} className="text-blue-600 flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-600 text-sm">{cert.issuer}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;