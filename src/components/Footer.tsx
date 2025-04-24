import React from 'react';
import { personalInfo } from '../constants/data';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Amrutha<span className="text-blue-400">.dev</span></h2>
            <p className="text-gray-400 mt-2">Data Analyst | Problem Solver</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="flex gap-4 mt-6 md:mt-0">
            <a href="https://github.com/amrutha-mk" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/amruthamk17/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="mt-2">Designed and developed with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
