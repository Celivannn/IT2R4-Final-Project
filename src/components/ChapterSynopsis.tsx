
import React from 'react';
import { Separator } from './ui/separator';

interface ChapterSynopsisProps {
  number: string | number;
  title?: string;
  content: React.ReactNode;
  className?: string;
}

const ChapterSynopsis = ({ number, title, content, className }: ChapterSynopsisProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 mb-6 historical-card ${className}`}>
      <h3 className="text-2xl font-bold text-primary mb-2">
        Chapter {number}{title ? `: ${title}` : ''}
      </h3>
      <Separator className="my-3" />
      <div className="prose max-w-none">
        {content}
      </div>
    </div>
  );
};

export default ChapterSynopsis;
