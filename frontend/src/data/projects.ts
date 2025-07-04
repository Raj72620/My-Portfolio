import { Project } from '../types/projects';
import registrationFormImg from '../assets/registration-form.jpg';
import videConferenceImg from '../assets/video-conference.jpeg';

export const projects: Project[] = [
  {
    id: "video-conference",
    title: "Video Conference",
    tech: ["Node","Express","React","Sockets","WebRTC"],
    image: videConferenceImg,
    description: "Real-time video conferencing app with WebRTC and Socket.IO",
    github: "#",
    live: "#",
    type: "Animation",
    locked: true // Add this flag
  },
  {
    id: "blessed-startups",
    title: "Blessed: Startups",
    tech: ["React", "Node.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "Showcase platform for emerging startups with subscription model",
    github: "#",
    live: "#",
    type: "Web App",
    locked: true
  },
  {
    id: "hot-days",
    title: "Hot Days Ahead",
    tech: ["Three.js", "GLSL"],
    image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "Interactive weather visualization with 3D effects",
    github: "#",
    live: "#",
    type: "Visualization",
    locked: true
  },
  {
    id: "registration-form",
    title: "Registration Form",
    tech: ["HTML", "CSS", "JavaScript"],
    image: registrationFormImg,
    description: "A responsive registration form with validation",
    github: "https://github.com/Raj72620/Registration-Form",
    live: "https://registration-forrmm.netlify.app/",
    type: "Web Application",
    locked: false // Only this project is unlocked
  },
  {
    id: "strawberries",
    title: "Strawberries",
    tech: ["Blender", "WebGL"],
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "3D fruit modeling with realistic textures and lighting",
    github: "#",
    live: "#",
    type: "3D Model",
    locked: true
  },
];