import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import GradesList from './components/GradesList';
import SubjectsList from './components/SubjectsList';
import CoursesList from './components/CoursesList';
import CourseDetails from './components/CourseDetails';
import Register from './components/Register';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50" dir="rtl">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <GradesList />
            </>
          } />
          <Route path="/grades" element={<GradesList />} />
          <Route path="/grade/:gradeId" element={<SubjectsList />} />
          <Route path="/subject/:subjectId" element={<CoursesList />} />
          <Route path="/course/:courseId" element={<CourseDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;