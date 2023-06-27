import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { cn } from 'ui/lib/utils';

import Link from 'next/link';
import SvgIcon, { IconNames } from 'ui/components/common/SvgIcon';

const buttonVariants = cva('inline-block', {
  variants: {
    variant: {
      default: 'rounded-full font-semibold bg-primary-500 hover:bg-primary-700 focus:bg-primary-700 text-white',
      secondary: 'rounded-lg bg-blackAlpha-800 hover:bg-blackAlpha-500 focus:bg-blackAlpha-700 text-white dark:hover:bg-teal-500 ',
      outline:
        'hover:bg-theme-bg m-1 inline-flex items-center rounded-2xl border border-white fill-gray-500 px-4 py-2 font-medium text-gray-500 no-underline transition-all duration-500 hover:border hover:border-gray-300 focus:z-10 focus:outline-none dark:border-0 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-100 rounded-full',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      text: 'text-theme-text-alt underline-offset-4 hover:underline font-bold dark:text-white px-0',
      icon: 'relative right-0 inline-block',
    },
    size: {
      default: 'px-8 py-2 text-sm',
      xxs: 'px-3 py-1 text-2xs',
      xs: 'px-3 py-1 text-xs',
      sm: 'px-4 py-2 text-sm',
      lg: 'px-10 py-6 text-sm',
      xl: 'px-10 py-6 text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type IconPosition = 'left' | 'right';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  text: string;
  href: string;
  icon?: boolean;
  iconName?: IconNames;
  iconPosition?: IconPosition;
  className?: string;
  target?: '_blank' | undefined;
}

export const Button = ({ text, href, target, icon = false, iconName = 'arrow-right', iconPosition = 'right', className, variant, size }: ButtonProps): JSX.Element => {
  // remove padding left/right for text link and icon only
  className = cn(className, (variant == 'text' || variant == 'icon') && 'p-0');

  return (
    <Link href={href} target={target} rel="noreferrer noopener" className={cn(buttonVariants({ variant, size, className }), iconName == 'arrow-right' && 'group')}>
      {icon && iconPosition == 'left' && <ButtonIcon iconName={iconName} className="mr-1" size={size} />}
      {variant != 'icon' && <span className="static">{text}</span>}
      {target === '_blank' && <span className="sr-only">Opens in a new tab</span>}

      {icon && iconPosition != 'left' && <ButtonIcon iconName={iconName} className="ml-1" size={size} variant={variant} />}
    </Link>
  );
};

export interface ButtonIconProps extends VariantProps<typeof buttonVariants> {
  iconName: IconNames;
  className: string;
}

const ButtonIcon = ({ iconName, className, size, variant }: ButtonIconProps): JSX.Element => {
  let iconCss;

  const iconBaseCss = 'h-4 w-4 inline-block';
  const icon_xs = 'h-3 w-3 top-1 relative';
  const iconTextVariantColor = 'text-primary-500 dark:text-red-500';

  if (variant == 'text' || variant == 'icon') iconCss = cn(iconTextVariantColor);
  if (size == 'xs') iconCss = cn(iconCss, icon_xs);

  return (
    <span className={cn(iconBaseCss, 'transform-gpu transition-transform duration-300 group-hover:translate-x-1 group-focus:translate-x-1', className)}>
      <SvgIcon icon={iconName} className={cn(iconCss, 'link-icon')} />
    </span>
  );
};

export default Button;
