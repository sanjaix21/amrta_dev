import React from 'react';
import { personalInfo } from '../../constants/data';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <p className="text-blue-600 font-semibold mb-2 animate-fadeIn">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 animate-slideUp">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl text-blue-600 font-semibold mb-6 animate-slideUp animation-delay-200">
              Data Analyst
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto lg:mx-0 animate-fadeIn animation-delay-400">
              Transforming complex data into actionable insights. Specializing in data analysis, 
              visualization, and machine learning to drive informed decision-making.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fadeIn animation-delay-600">
              <a 
                href="#projects" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                View My Projects
              </a>
              <a 
                href={personalInfo.resumeLink} 
                className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-6 rounded-lg border border-blue-600 transition-all duration-300 shadow-sm hover:shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fadeIn animation-delay-400">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="/profile.jpg"
                  alt="Amrutha Kesavkumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg">
                <div className="text-sm font-medium">Data Analyst</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <a href="#about" aria-label="Scroll down">
            <ChevronDown size={30} className="text-blue-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;