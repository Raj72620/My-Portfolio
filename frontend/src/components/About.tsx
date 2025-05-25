import { FC, useRef, useEffect, useState } from 'react';
import styles from '../styles/About.module.css';
import myProfileImage from '../assets/myimg.png.jpg';
import myProfileImage2 from '../assets/school.jpg';
import myProfileImage3 from '../assets/class12th.jpg';
import myProfileImage4 from '../assets/svcet.jpg';
import tenthMarksheet from '../assets/10th marks.jpg';
import interMarksheet from '../assets/Inter Marks.jpg';

interface EducationItem {
  title: string;
  period: string;
  image: string;
  content: string;
  marksheetLink: string;
  institutionLink?: string; // New property for institution website
}

const educationData: EducationItem[] = [
  {
    title: "SCHOOL",
    period: "2019-2021",
    image: myProfileImage2,
    content: "1. COVID Impact: Due to the pandemic, regular exams were canceled.<br>2. Government Policy: The government passed all students and awarded full marks (600/600).",
    marksheetLink: tenthMarksheet,
    institutionLink: "https://www.narayanaschools.in/"
  },
  {
    title: "Intermediate",
    period: "2021-2023",
    image: myProfileImage3, 
    content: "11th grade was impacted by the COVID-19 pandemic, leading to syllabus gaps and several unclear concepts. However, my 12th grade went much more smoothly—everything was well-structured, concepts were clarified, and I was able to achieve my academic goals.",
    marksheetLink: interMarksheet,
    institutionLink: ""
  },
  {
    title: "B-Tech",
    period: "2023-2026",
    image: myProfileImage4,
    content: "Currently in 4th year of B.Tech in Information Technology at SVCET, Chittoor. graduation year-2026.",
    marksheetLink: "",
    institutionLink: "https://svcetedu.org/"
  }
];

const About: FC = () => {
  const [selectedMarksheet, setSelectedMarksheet] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const nodeRefs = useRef<HTMLDivElement[]>([]);

  const handleMarksheetClick = (image: string) => {
    if (!image) return;
    setSelectedMarksheet(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMarksheet(null);
  };

  const handleInstitutionClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.nodeVisible);
        }
      });
    }, { threshold: 0.1 });

    const currentNodes = nodeRefs.current.filter(Boolean);
    currentNodes.forEach(node => observer.observe(node));

    return () => currentNodes.forEach(node => observer.unobserve(node));
  }, []);

  return (
    <section id="about" ref={sectionRef} className={styles.secondSection}>
      {/* Modal for marksheet */}
      {isModalOpen && selectedMarksheet && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>×</button>
            <img src={selectedMarksheet} alt="Mark Sheet" className={styles.marksheetImage} />
          </div>
        </div>
      )}

      <div className={styles.flexContainer}>
        {/* Left Side: Timeline */}
        <div className={styles.leftSide}>
          <div className={styles.timeline}>
            {educationData.map((item, index) => (
              <div 
                key={index} 
                ref={el => { 
                  if (el) nodeRefs.current[index] = el;
                }} 
                className={styles.node}
              >
                <div className={styles.nodeDisc}></div>
                <div className={`${styles.nodeContent} ${
                  index % 2 === 0 ? styles.left : styles.right
                }`}>
                  <div 
                    className={styles.imageContainer} 
                    onClick={() => item.institutionLink && handleInstitutionClick(item.institutionLink)}
                    style={{ cursor: item.institutionLink ? 'pointer' : 'default' }}
                  >
                    <img src={item.image} alt={item.title} />
                    <div className={styles.shiningEffect}></div>
                  </div>
                  {item.marksheetLink ? (
                    <a 
                      href="#" 
                      className={styles.marksheetLinkBox} 
                      onClick={(e) => {
                        e.preventDefault();
                        handleMarksheetClick(item.marksheetLink);
                      }}
                    >
                      <span>My MarkSheet</span>
                    </a>
                  ) : (
                    <div className={styles.marksheetLinkBox} style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                      <span>MarkSheet Not Available</span>
                    </div>
                  )}
                  <div className={styles.info}>
                    <h3>{item.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: item.content }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: About Me */}
        <div className={styles.rightSide}>
          <div className={styles.aboutMeHeading}>
            <h2>About Me</h2>
          </div>
          <div className={styles.aboutMeBox}>
            <div className={styles.imageContainer}>
              <img src={myProfileImage} alt="Profile" />
            </div>
            <div className={styles.aboutMeDetails}>
              <p><strong>Name:</strong> <span>Nishanth Raj</span></p>
              <p><strong>Study:</strong> <span>SVCET College,Chittoor</span></p>
              <p><strong>Year:</strong> <span>4th - 2026' batch</span></p>
              <p><strong>Contact:</strong> <span>8072228435</span></p>
              <p><strong>Email:</strong> <span>nishanthraj9618@gmail.com</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;