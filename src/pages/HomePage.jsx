import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default HomePage;