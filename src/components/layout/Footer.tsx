import React from 'react';
import { Upload as Diploma, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <Diploma className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">EduChain</span>
            </div>
            <p className="mt-2 text-slate-300 text-sm max-w-md">
              A decentralized platform for educational institutions to issue, manage, and verify academic credentials on the blockchain.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:gap-16">
            <div>
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Platform</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-slate-300 hover:text-white">About</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white">Features</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white">For Institutions</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white">For Students</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Support</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-slate-300 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white">API</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-slate-700 pt-8 flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} EduChain. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;