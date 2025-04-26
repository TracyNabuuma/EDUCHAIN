import React from 'react';
import Layout from '../components/layout/Layout';
import StudentList from '../components/students/StudentList';

const StudentsPage = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StudentList />
      </div>
    </Layout>
  );
};

export default StudentsPage;