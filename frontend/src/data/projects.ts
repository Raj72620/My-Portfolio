import { Project } from '../types/projects';
import registrationFormImg from '../assets/registration-form.jpg';
import videConferenceImg from '../assets/video-conference.jpeg';
import DiscussionsImg from '../assets/Discussion-Image.jpeg';
import codingImg from '../assets/coding-image.png';

export const projects: Project[] = [
  {
    id: "video-conference",
    title: "Video Conference",
    tech: ["Node","Express","React","Sockets","WebRTC"],
    image: videConferenceImg,
    description: "Real-time video conferencing app with WebRTC and Socket.IO",
    github: "#",
    live: "#",
    type: "Web Application",
    locked: true 
  },
  {
    id: "blessed-startups",
    title: "Startups",
    tech: ["React", "Node.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "Showcase platform for emerging startups with model",
    github: "#",
    live: "#",
    type: "Web App",
    locked: true
  },
  {
    id: "Coding Platform",
    title: "Coding Platform",
    tech: ["Node", "Express", "React", "MongoDB","Docker"],
    image: codingImg,
    description: "",
    github: "#",
    live: "#",
    type: "Web Application",
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
    id: "Discussions",
    title: "Discussion Platfrom",
    tech: ["React", "Express", "MongoDB", "Socket.IO"],
    image: DiscussionsImg,
    description: "A discussion page where users can post and discuss topics",
    github: "#",
    live: "#",
    type: "Web Application",
    locked: true
  },
];