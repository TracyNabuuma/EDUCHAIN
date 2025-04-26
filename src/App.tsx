import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import StudentsPage from './pages/StudentsPage';
import VerificationPage from './pages/VerificationPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/verify" element={<VerificationPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;