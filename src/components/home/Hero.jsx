import React from 'react';
import { ArrowRight, Award, Shield, Database } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
          <div className="mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Secure Academic Credentials on the Blockchain
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-lg">
              EduChain empowers educational institutions to issue tamper-proof digital certificates that students can share globally with instant verification.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href='/certificates'><button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md text-lg font-medium transition duration-200 flex items-center justify-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button></a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-8 transform transition-all duration-500 hover:scale-105">
              <div className="absolute -top-5 -right-5 bg-amber-500 text-white p-2 rounded-full shadow-lg">
                <Award className="h-8 w-8" />
              </div>
              <div className="border-2 border-blue-100 rounded-md p-6 bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-blue-900 text-xl font-bold">Certificate of Achievement</h3>
                    <p className="text-blue-700">Bachelor of Computer Science</p>
                  </div>
                  <div className="flex items-center text-emerald-600">
                    <Shield className="h-5 w-5 mr-1" />
                    <span className="text-sm font-medium">Verified</span>
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-gray-600 text-sm mb-1">Issued to:</p>
                  <p className="text-gray-900 font-medium">Sarah Johnson</p>
                </div>
                <div className="mb-6">
                  <p className="text-gray-600 text-sm mb-1">Issued by:</p>
                  <p className="text-gray-900 font-medium">University of Innovation</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-blue-100">
                  <div className="flex items-center text-blue-700">
                    <Database className="h-4 w-4 mr-1" />
                    <span className="text-xs">Blockchain Verified</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    ID: 0x8f7e...2c91
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;