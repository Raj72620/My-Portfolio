import { FC, useState, useEffect } from 'react'; // Add useEffect
import { useNavigate } from 'react-router-dom';
import ScrollLink from './ScrollLink';
import styles from '../styles/Navigation.module.css';

type SectionId = 'home' | 'about' | 'skills' | 'projects' | 'collaborate';

interface NavLink {
  id: SectionId;
  label: string;
}

const Navigation: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Add this state
  const navigate = useNavigate();
  
  const links: NavLink[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Coding Profiles' },
    { id: 'skills', label: 'Skills & Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'collaborate', label: 'Collaborate' }
  ];

  // Add this useEffect for scroll handling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleProgrammerClick = () => {
    navigate('/programmer');
    closeMenu();
  };

  const handleNavClick = (id: SectionId) => {
    window.history.pushState(null, '', `#${id}`);
    closeMenu();
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <div 
          className={styles.left} 
          onClick={handleProgrammerClick}
          style={{ cursor: 'pointer' }}
        >
          Programmer
        </div>
        
        <div className={styles.right}>
          <button 
            className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
          </button>

          <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ''}`}>
            {links.map(link => (
              <li key={link.id}>
                <ScrollLink
                  to={link.id}
                  activeClass={styles.active}
                  onSetActive={() => handleNavClick(link.id)}
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;