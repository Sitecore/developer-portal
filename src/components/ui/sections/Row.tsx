import { cn } from '@/src/lib/util';
import type React from 'react';

type RowProps = {
  children: React.ReactNode;
  columns: number;
  className?: string;
};

const DEFAULT_COLUMNS = 1;

const GRID_COLUMNS_MAP: Readonly<Record<number, string>> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
};

const getGridColumnsClass = (columns: number): string => {
  return GRID_COLUMNS_MAP[columns] ?? GRID_COLUMNS_MAP[DEFAULT_COLUMNS];
};

export const Row = ({ children, columns, className }: RowProps) => {
  const gridColumnsClass = getGridColumnsClass(columns);

  return (
    <div
      className={cn(
        'my-2 grid grid-cols-1 gap-2 md:gap-10',
        gridColumnsClass,
        className,
      )}
    >
      {children}
    </div>
  );
};
