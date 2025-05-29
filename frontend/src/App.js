import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import CoursesPage from './pages/CoursesPage';
import CourseDetail from './pages/CourseDetail';
import NotFound from './pages/NotFound';

import './App.css'; // create or update this


function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
