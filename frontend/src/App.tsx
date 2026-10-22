import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';
import CaseStudyPage from './components/CaseStudyPage';
import './styles/global.css';

function MainLayout() {
  return (
    <div className="site-wrapper">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Main portfolio entry point */}
        <Route path="/" element={<MainLayout />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/programmer" element={<Navigate to="/" replace />} />

        {/* Deep-link case studies */}
        <Route path="/case-study/:id" element={<CaseStudyPage />} />
        <Route path="/projects/:id" element={<CaseStudyPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
