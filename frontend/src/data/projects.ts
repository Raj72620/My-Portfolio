// src/data/projects.ts
import { Project } from '../types/projects';
import registrationFormImg from '../assets/registration-form.jpg';

export const projects: Project[] = [
  {
    id: "palm-trees",
    title: "Palm Trees",
    tech: ["CSS", "GSAP"],
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "Tropical palm tree animation with transitions and realistic sway effects",
    github: "#",
    live: "#",
    type: "Animation",
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
  },
];