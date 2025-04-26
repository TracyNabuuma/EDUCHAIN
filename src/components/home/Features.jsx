import React from 'react';
import { ShieldCheck, Lock, Award, Users, BookOpen, BarChart } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-gray-100">
    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Tamper-Proof Credentials",
      description: "Certificates issued on the blockchain cannot be altered or forged, ensuring complete authenticity."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Secure Student Wallets",
      description: "Each student receives a unique wallet identifier to securely store and manage their credentials."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Customizable Certificates",
      description: "Institutions can create beautiful, customized certificates with their branding and specific details."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Easy Verification",
      description: "Third parties can instantly verify the authenticity of certificates without contacting the institution."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Comprehensive Record",
      description: "Students build a complete educational record that's portable, verified, and globally accessible."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Analytics & Insights",
      description: "Institutions gain valuable insights into certification patterns and student achievements."
    }
  ];

  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose EduChain?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform combines the security of blockchain with intuitive tools for educational institutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;