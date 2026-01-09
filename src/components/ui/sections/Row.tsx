import { cn } from '@lib/utils';
import React from 'react';

type RowProps = {
  children: React.ReactNode | Array<React.ReactNode>;
  columns: number;
  className?: string;
};

const gridColsMap: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
};

export const Row = ({ children, columns, className }: RowProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1',
        gridColsMap[columns] || `md:grid-cols-${columns}`,
        'gap-2 md:gap-10',
        'my-2',
        className
      )}
    >
      {children}
    </div>
  );
};
