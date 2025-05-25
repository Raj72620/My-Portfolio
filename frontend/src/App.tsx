import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import ProgrammerIntro from './components/ProgrammerIntro';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AllProjects from './components/AllProjects';
import Collaborate from './components/Collaborate';
import Footer from './components/Footer';
import CertificateViewer from './components/CertificateViewer';
import ProjectDetails from './components/ProjectDetails';
import './styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navigation />
        <Routes>
          {/* Programmer Intro as landing page */}
          <Route path="/" element={<ProgrammerIntro />} />
          
          {/* Main portfolio page with all sections */}
          <Route path="/home" element={
            <div className="app-container">
              <AnimatePresence>
                <main>
                  <Home />
                  <About />
                  <Skills />
                  <Projects />
                  <Collaborate />
                </main>
              </AnimatePresence>
              <Footer />
            </div>
          }/>
          
          {/* All Projects page */}
          <Route path="/all-projects" element={
            <div className="app-container">
              <AllProjects />
              <Footer />
            </div>
          }/>
          
          {/* Programmer intro accessible via nav */}
          <Route path="/programmer" element={<ProgrammerIntro />} />
          
          {/* Other routes */}
          <Route path="/certificates/:certId" element={<CertificateViewer />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;