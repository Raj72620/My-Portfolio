// src/types/projects.ts
export interface Project {
    id: string;
    title: string;
    tech: string[];
    image: string;
    github: string;
    live: string;
    description: string;
    type: string;
    locked: boolean; // Flag to indicate if the project is locked
  }