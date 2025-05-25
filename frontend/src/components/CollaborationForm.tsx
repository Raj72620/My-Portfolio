// components/CollaborationForm.tsx
import { useState } from 'react';
import confetti from 'canvas-confetti';

const CollaborationForm = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setMessage('Your idea has been submitted! 🚀 Let’s build something amazing together.');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="collaboration-form">
      {/* Form fields */}
      {message && <div className="form-message">{message}</div>}
    </form>
  );
};

// Add this export statement
export default CollaborationForm;