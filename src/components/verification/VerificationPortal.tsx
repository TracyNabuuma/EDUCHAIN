import React, { useState } from 'react';
import { Search, CheckCircle, XCircle, Copy, ExternalLink } from 'lucide-react';

const VerificationPortal = () => {
  const [certificateId, setCertificateId] = useState('');
  const [verificationStatus, setVerificationStatus] = useState<'initial' | 'loading' | 'verified' | 'invalid'>('initial');
  const [certificateData, setCertificateData] = useState<any>(null);
  
  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!certificateId.trim()) return;
    
    setVerificationStatus('loading');
    
    // Simulate blockchain verification
    setTimeout(() => {
      // For demo purposes, we'll verify any ID with "valid" in it
      if (certificateId.includes('valid')) {
        setVerificationStatus('verified');
        setCertificateData({
          id: certificateId,
          studentName: "Alex Johnson",
          institution: "University of Technology",
          program: "Bachelor of Computer Science",
          issueDate: "2025-01-15",
          expiryDate: "",
          transactionHash: "0x7a8d93f21744fc25767fb13d39f787612fsc67f562a8b58ad0f425caa28e7"
        });
      } else {
        setVerificationStatus('invalid');
        setCertificateData(null);
      }
    }, 1500);
  };
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, we would show a toast notification
  };
  
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
      <div className="bg-blue-800 p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Certificate Verification</h2>
        <p className="text-blue-100">
          Verify the authenticity of academic credentials issued on the EduChain platform.
        </p>
      </div>
      
      <div className="p-6">
        <form onSubmit={handleVerify}>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                placeholder="Enter certificate ID or wallet address"
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="flex-none bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Verify Certificate
            </button>
          </div>
        </form>
        
        <div className="mt-6">
          {verificationStatus === 'loading' && (
            <div className="flex justify-center p-6">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-800"></div>
            </div>
          )}
          
          {verificationStatus === 'verified' && certificateData && (
            <div className="border border-green-200 rounded-lg p-6 bg-green-50 relative">
              <div className="absolute top-4 right-4 flex space-x-2">
                <button 
                  onClick={() => copyToClipboard(certificateData.id)}
                  className="text-gray-500 hover:text-gray-700"
                  title="Copy Certificate ID"
                >
                  <Copy className="h-5 w-5" />
                </button>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-gray-700"
                  title="View on Blockchain Explorer"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
              
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-green-800">
                  Valid Certificate
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Student Name</p>
                  <p className="font-medium">{certificateData.studentName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Institution</p>
                  <p className="font-medium">{certificateData.institution}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Program</p>
                  <p className="font-medium">{certificateData.program}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Issue Date</p>
                  <p className="font-medium">{certificateData.issueDate}</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-green-200">
                <p className="text-sm text-gray-500">Blockchain Transaction</p>
                <p className="text-xs font-mono text-gray-700 overflow-hidden text-ellipsis">
                  {certificateData.transactionHash}
                </p>
              </div>
              
              <div className="mt-4 flex justify-end">
                <button className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded-md text-sm font-medium">
                  View Full Certificate
                </button>
              </div>
            </div>
          )}
          
          {verificationStatus === 'invalid' && (
            <div className="border border-red-200 rounded-lg p-6 bg-red-50">
              <div className="flex items-center mb-4">
                <XCircle className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-lg font-semibold text-red-800">
                  Invalid Certificate
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                The certificate ID you provided could not be verified on the blockchain. This could be due to:
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
                <li>The certificate ID does not exist</li>
                <li>The certificate has been revoked</li>
                <li>The certificate ID was entered incorrectly</li>
              </ul>
              <p className="text-gray-700">
                Please check the ID and try again. If you believe this is an error, please contact the issuing institution.
              </p>
            </div>
          )}
          
          {verificationStatus === 'initial' && (
            <div className="text-center p-6 border border-gray-200 rounded-lg bg-gray-50">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-3" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                Verify Certificate Authenticity
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Enter a certificate ID or student wallet address to instantly verify its authenticity on the blockchain.
              </p>
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-900 mb-3">How Verification Works</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-full p-1 mr-3">
              <span className="flex items-center justify-center h-6 w-6 bg-blue-800 text-white rounded-full">1</span>
            </div>
            <p className="text-gray-600">
              Certificate data is securely stored on the blockchain when issued
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-full p-1 mr-3">
              <span className="flex items-center justify-center h-6 w-6 bg-blue-800 text-white rounded-full">2</span>
            </div>
            <p className="text-gray-600">
              Verification checks the blockchain for matching certificate data
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-full p-1 mr-3">
              <span className="flex items-center justify-center h-6 w-6 bg-blue-800 text-white rounded-full">3</span>
            </div>
            <p className="text-gray-600">
              Real-time verification confirms authenticity without contacting institution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPortal;