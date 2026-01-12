import { cn } from '@/src/lib/util';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import { Button, type buttonVariants } from '@src/components/ui/button';
import type { VariantProps } from 'class-variance-authority';
import NextLink from 'next/link';
import type { HTMLAttributeAnchorTarget, JSX } from 'react';

type LinkButtonProps = Omit<React.ComponentProps<typeof Button>, 'asChild' | 'href'> &
  VariantProps<typeof buttonVariants> & {
    href: string;
    text: string;
    showIcon?: boolean;
    icon?: JSX.Element;
    target?: HTMLAttributeAnchorTarget | undefined;
    color?: string; // Optional style override for text color
  };

export const LinkButton = ({ href, text, showIcon = true, variant = 'default', icon, target, className, size = 'default', colorScheme, color, ...rest }: LinkButtonProps) => {
  const ButtonIcon = icon != null ? icon : <Icon path={mdiArrowRight} size={0.8} />;

  return (
    <Button asChild variant={variant} size={size} colorScheme={colorScheme} className={cn('not-prose', className)} {...rest}>
      <NextLink href={href} target={target}>
        {text}
        {showIcon && ButtonIcon}
      </NextLink>
    </Button>
  );
};
