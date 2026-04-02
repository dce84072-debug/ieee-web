import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Institute from './pages/Institute';
import Conference from './pages/Conference';
import Tracks from './pages/Tracks';
import Committee from './pages/Committee';
import Advisory from './pages/Advisory';
import Plenary from './pages/Plenary';
import Keynote from './pages/Keynote';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import Plagiarism from './pages/Plagiarism';
import AuthorSubmission from './pages/AuthorSubmission';
import CameraSubmission from './pages/CameraSubmission';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/institute" element={<Institute />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/plenary" element={<Plenary />} />
          <Route path="/keynote" element={<Keynote />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/author-submission" element={<AuthorSubmission />} />
          <Route path="/camera-submission" element={<CameraSubmission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plagiarism" element={<Plagiarism />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
