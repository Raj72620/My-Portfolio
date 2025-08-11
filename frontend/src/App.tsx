import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import ProgrammerIntro from './components/ProgrammerIntro';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Collaborate from './components/Collaborate';
import Footer from './components/Footer';
import CertificateViewer from './components/CertificateViewer';
import ExperiencePerformanceViewer from './components/ExperiencePerformanceViewer';
import ProjectDetails from './components/ProjectDetails';
import './styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const hideNav = location.pathname === '/' || location.pathname === '/programmer';

  return (
    <>
      {!hideNav && <Navigation />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Programmer Intro as landing page */}
          <Route path="/" element={<ProgrammerIntro />} />
          
          {/* Main portfolio page with all sections */}
          <Route path="/home" element={
            <div className="app-container">
              <main>
                <Home />
                <About />
                <Skills />
                <Projects />
                <Collaborate />
              </main>
              <Footer />
            </div>
          }/>
          
          {/* Programmer intro accessible via nav */}
          <Route path="/programmer" element={<ProgrammerIntro />} />
          
          {/* Other routes */}
          <Route path="/certificates/:certId" element={<CertificateViewer />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
                <Route path="/experience-performance/:certId" element={<ExperiencePerformanceViewer />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;