import { cn } from '@lib/utils';
import React from 'react';

type VerticalGroupProps = React.HTMLAttributes<HTMLElement>;

export const VerticalGroup = React.forwardRef<HTMLElement, VerticalGroupProps>(
  ({ className, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        'flex flex-col items-center justify-start',
        'text-black dark:text-white',
        'px-2 2xl:px-0',
        'transition-all duration-150 ease-out',
        className
      )}
      {...props}
    />
  )
);
VerticalGroup.displayName = 'VerticalGroup';
