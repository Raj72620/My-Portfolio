import { Link } from 'react-scroll';
import styles from '../styles/Navigation.module.css';

interface ScrollLinkProps {
  to: string;
  children: React.ReactNode;
  activeClass?: string;
  onSetActive?: (to: string) => void;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ 
  to, 
  children,
  activeClass,
  onSetActive 
}) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className={styles.navLink}
    activeClass={activeClass}
    onSetActive={onSetActive}
  >
    {children}
  </Link>
);

export default ScrollLink;