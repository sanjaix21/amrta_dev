import React from 'react';
import { personalInfo } from '../../constants/data';
import { User, Mail, Phone, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className="bg-blue-600 px-6 py-4">
                <h3 className="text-xl font-semibold text-white">Personal Info</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="text-blue-600" size={20} />
                    <div>
                      <p className="text-gray-600 text-sm font-medium">Name</p>
                      <p className="text-gray-800 font-medium">{personalInfo.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-blue-600" size={20} />
                    <div>
                      <p className="text-gray-600 text-sm font-medium">Location</p>
                      <p className="text-gray-800 font-medium">{personalInfo.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-blue-600" size={20} />
                    <div>
                      <p className="text-gray-600 text-sm font-medium">Email</p>
                      <p className="text-gray-800 font-medium">{personalInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-blue-600" size={20} />
                    <div>
                      <p className="text-gray-600 text-sm font-medium">Phone</p>
                      <p className="text-gray-800 font-medium">{personalInfo.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <a 
                    href={personalInfo.resumeLink} 
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-2 px-4 rounded transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I am passionate about leveraging data to solve complex problems and drive strategic decision-making. 
              With a strong foundation in programming languages like Python and R, combined with expertise in data 
              visualization tools such as Tableau, I transform raw data into meaningful insights that help 
              organizations achieve their goals.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not analyzing data, I enjoy exploring new technologies, reading about advances in AI and 
              machine learning, and contributing to open-source projects. I believe in continuous learning and 
              staying updated with the latest trends in the ever-evolving field of data science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;