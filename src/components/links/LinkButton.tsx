import { Button, buttonVariants } from '@components/ui/button';
import { cn } from '@lib/utils';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import { VariantProps } from 'class-variance-authority';
import NextLink from 'next/link';
import { HTMLAttributeAnchorTarget, JSX } from 'react';

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
    <Button asChild variant={variant} size={size} colorScheme={colorScheme} className={cn('whitespace-normal', className)} style={color ? { color } : undefined} {...rest}>
      <NextLink href={href} target={target}>
        {text}
        {showIcon && <span className="ml-2">{ButtonIcon}</span>}
      </NextLink>
    </Button>
  );
};
