import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Credential Management?</h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-8">
            Join the growing network of institutions issuing secure, verifiable academic credentials on the blockchain.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-emerald-800 hover:bg-emerald-50 px-8 py-3 rounded-md text-lg font-medium transition duration-200 flex items-center justify-center mx-auto sm:mx-0">
              Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-emerald-700 px-8 py-3 rounded-md text-lg font-medium transition duration-200 mx-auto sm:mx-0">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;