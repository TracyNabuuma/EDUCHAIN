import React from 'react';
import { Star } from 'lucide-react';

const Testimonial = ({ quote, name, role, institution, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-amber-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <p className="text-gray-700 italic mb-6">"{quote}"</p>
      <div>
        <p className="font-medium text-gray-900">{name}</p>
        <p className="text-gray-600">{role}, {institution}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "EduChain has completely transformed how we issue and manage academic credentials. The blockchain verification gives our certificates added credibility in the global job market.",
      name: "Kakooza Vianny",
      role: "Co founder ",
      institution: "Decentracode",
      rating: 5
    },
    {
      quote: "As someone who's studied internationally, having all my credentials in one secure, verifiable place has made job applications so much easier. Employers trust my qualifications immediately.",
      name: "Nabuuma Teddy",
      role: "Graduate Student",
      institution: "Decentracode",
      rating: 5
    },
    {
      quote: "The administrative time we've saved using EduChain has been remarkable. What used to take weeks now happens almost instantly, and with greater security.",
      name: "Kirabo Gloria",
      role: "Administrator",
      institution: "Twin Cakery",
      rating: 4
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join educational institutions around the world that trust EduChain for their credential management.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;