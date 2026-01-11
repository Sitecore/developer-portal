import { cn } from '@/src/lib/util';
import React from 'react';

type CenteredContentProps = React.HTMLAttributes<HTMLDivElement> & { direction?: 'row' | 'column' };

export const CenteredContent = React.forwardRef<HTMLDivElement, CenteredContentProps>(({ className, direction = 'column', ...props }, ref) => (
  <div ref={ref} className={cn('w-full max-w-7xl', direction === 'column' ? 'flex flex-col gap-2 md:gap-8' : 'flex flex-row gap-2 md:gap-8', 'py-0 md:py-8 px-1 md:px-8', className)} {...props} />
));
CenteredContent.displayName = 'CenteredContent';
