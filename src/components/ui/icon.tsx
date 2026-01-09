import { cn } from '@/src/components/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { SVGProps } from 'react';

const iconVariants = cva('inline-flex items-center justify-center', {
  variants: {
    variant: {
      default: '',
      subtle: 'p-1 rounded-md bg-primary-bg',
      filled: 'p-1 rounded-md bg-primary-fg text-background',
    },
    colorScheme: {
      primary: 'text-primary-fg',
      neutral: 'text-neutral-fg',
      success: 'text-success-fg',
      danger: 'text-danger-fg',
      warning: 'text-warning-fg',
      yellow: 'text-yellow-800 dark:text-yellow-200',
      teal: 'text-teal-800 dark:text-teal-200',
      cyan: 'text-cyan-800 dark:text-cyan-200',
      blue: 'text-blue-800 dark:text-blue-200',
      purple: 'text-info-fg',
      pink: 'text-pink-800 dark:text-pink-200',
    },
  },
  compoundVariants: [
    {
      variant: 'subtle',
      colorScheme: 'primary',
      class: 'bg-primary-bg',
    },
    {
      variant: 'subtle',
      colorScheme: 'neutral',
      class: 'bg-neutral-bg',
    },
    {
      variant: 'subtle',
      colorScheme: 'success',
      class: 'bg-success-bg',
    },
    {
      variant: 'subtle',
      colorScheme: 'danger',
      class: 'bg-danger-bg',
    },
    {
      variant: 'subtle',
      colorScheme: 'warning',
      class: 'bg-warning-bg',
    },
    {
      variant: 'subtle',
      colorScheme: 'yellow',
      class: 'bg-yellow-100 dark:text-yellow-800',
    },
    {
      variant: 'subtle',
      colorScheme: 'teal',
      class: 'bg-teal-100 dark:bg-teal-800',
    },
    {
      variant: 'subtle',
      colorScheme: 'cyan',
      class: 'bg-cyan-100 dark:bg-cyan-800',
    },
    {
      variant: 'subtle',
      colorScheme: 'blue',
      class: 'bg-blue-100 dark:bg-blue-800',
    },
    {
      variant: 'subtle',
      colorScheme: 'purple',
      class: 'bg-info-bg',
    },
    {
      variant: 'subtle',
      colorScheme: 'pink',
      class: 'bg-pink-100 dark:bg-pink-800',
    },
    {
      variant: 'filled',
      colorScheme: 'primary',
      class: 'bg-primary-fg text-background',
    },
    {
      variant: 'filled',
      colorScheme: 'neutral',
      class: 'bg-neutral-fg text-background',
    },
    {
      variant: 'filled',
      colorScheme: 'success',
      class: 'bg-success-fg text-background',
    },
    {
      variant: 'filled',
      colorScheme: 'danger',
      class: 'bg-danger-fg text-background',
    },
    {
      variant: 'filled',
      colorScheme: 'warning',
      class: 'bg-warning-fg text-background',
    },
    {
      variant: 'filled',
      colorScheme: 'yellow',
      class: 'bg-yellow-800 dark:bg-yellow-200 text-background dark:text-background',
    },
    {
      variant: 'filled',
      colorScheme: 'teal',
      class: 'bg-teal-800 dark:bg-teal-200 text-background dark:text-background',
    },
    {
      variant: 'filled',
      colorScheme: 'cyan',
      class: 'bg-cyan-800 dark:bg-cyan-200 text-background dark:text-background',
    },
    {
      variant: 'filled',
      colorScheme: 'blue',
      class: 'bg-blue-800 dark:bg-blue-200 text-background dark:text-background',
    },
    {
      variant: 'filled',
      colorScheme: 'purple',
      class: 'bg-info-fg text-background',
    },
    {
      variant: 'filled',
      colorScheme: 'pink',
      class: 'bg-pink-800 dark:bg-pink-200 text-background dark:text-background',
    },
  ],
  defaultVariants: {
    variant: 'default',
    colorScheme: 'primary',
  },
});

const iconSize = {
  default: 'size-6',
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-7',
  xl: 'size-9',
  xxl: 'size-11',
} as const;

type IconsProps = SVGProps<SVGSVGElement> & {
  path: string;
  title?: string;
  fill?: string;
  className?: string;
  size?: keyof typeof iconSize;
} & VariantProps<typeof iconVariants>;

function Icon({ path, title, variant, size = 'default', colorScheme, className, fill = 'currentColor', ...props }: IconsProps) {
  return (
    <span className={cn(iconVariants({ variant, colorScheme }), className)}>
      <svg viewBox="0 0 24 24" aria-label={title} className={iconSize[size]} fill={fill} {...props}>
        <path d={path} />
      </svg>
    </span>
  );
}

export { Icon, iconVariants };
