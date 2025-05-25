// src/types/react-simple-typewriter.d.ts
declare module 'react-simple-typewriter' {
    interface TypewriterOptions {
      words: string[];
      loop?: boolean | number;
      typeSpeed?: number;
      deleteSpeed?: number;
      delaySpeed?: number;
      onLoopDone?: () => void;
      onType?: (counter: number) => void;
      onDelete?: (counter: number) => void;
      onDelay?: (counter: number) => void;
    }
  
    export function useTypewriter(options: TypewriterOptions): [string];
  }