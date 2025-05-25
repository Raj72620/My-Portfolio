// src/types/theme.d.ts
declare module 'react-ts-timeline' {
    import { FC } from 'react';
    
    interface TimelineProps {
      items: Array<{
        id: number;
        date: string;
        title: string;
        content: string;
      }>;
    }
  
    const Timeline: FC<TimelineProps>;
    export default Timeline;
  }