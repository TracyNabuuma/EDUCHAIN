import React from 'react';
import Layout from '../components/layout/Layout';
import AdminDashboard from '../components/admin/AdminDashboard';
import CertificateForm from '../components/certificates/CertificateForm';

const AdminPage = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdminDashboard />
        <div className="mt-8">
          <CertificateForm />
        </div>
      </div>
    </Layout>
  );
};

export default AdminPage;