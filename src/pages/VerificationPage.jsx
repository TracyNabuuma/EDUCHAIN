import React from 'react';
import Layout from '../components/layout/Layout';
import VerificationPortal from '../components/verification/VerificationPortal';

const VerificationPage = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Certificate Verification</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Instantly verify the authenticity of academic credentials issued on the EduChain platform without contacting the institution.
          </p>
        </div>
        <VerificationPortal />
      </div>
    </Layout>
  );
};

export default VerificationPage;