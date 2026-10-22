import { FC } from 'react';
import Hero from './Hero';
import QuickProof from './QuickProof';
import SelectedWork from './SelectedWork';
import WhatIveDone from './WhatIveDone';
import ProgrammingLanguages from './ProgrammingLanguages';
import Engineering from './Engineering';
import ProblemSolving from './ProblemSolving';
import Achievements from './Achievements';
import TimelineJourney from './TimelineJourney';
import ServicesAndFreelance from './ServicesAndFreelance';
import About from './About';
import Contact from './Contact';

export const Home: FC = () => {
  return (
    <main id="main-content">
      {/* 1. Hero & Secondary Proof */}
      <Hero />

      {/* 2. Quick Proof: Engineering at a Glance */}
      <QuickProof />

      {/* 3. Selected Flagship Work & Case Studies */}
      <SelectedWork />

      {/* 4. What I've Done: Mentoring, Full-Stack, AI, Open Source */}
      <WhatIveDone />

      {/* 5. Programming Languages: Java, JS/TS, SQL */}
      <ProgrammingLanguages />

      {/* 6. Engineering: How I Build Software */}
      <Engineering />

      {/* 7. Problem Solving: 300+ DSA, GFG Rank #1 */}
      <ProblemSolving />

      {/* 8. Verified Achievements & Honors */}
      <Achievements />

      {/* 9. Timeline & Career Trajectory */}
      <TimelineJourney />

      {/* 10. Beyond the Code, Services & Independent Engineering */}
      <ServicesAndFreelance />

      {/* 11. About Me & Education */}
      <About />

      {/* 12. Contact: Let's Build Something Useful */}
      <Contact />
    </main>
  );
};

export default Home;
