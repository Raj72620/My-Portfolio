// src/hooks/useTypewriter.ts
import { useState, useEffect } from 'react';

export const useTypewriter = (roles: string[]) => {
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = roles[roleIndex];
      
      if (!isDeleting && charIndex < current.length) {
        setCurrentRole(current.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentRole(current.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setTimeout(() => setRoleIndex((prev) => (prev + 1) % roles.length), 500);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return currentRole;
};