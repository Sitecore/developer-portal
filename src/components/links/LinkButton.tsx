import NextLink from 'next/link';
import { HTMLAttributeAnchorTarget, JSX } from 'react';
import { Button, ButtonProps } from '@components/ui/button';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import { cn } from '@lib/utils';

type LinkButtonProps = Omit<ButtonProps, 'asChild'> & {
  href: string;
  text: string;
  showIcon?: boolean;
  icon?: JSX.Element;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  color?: string;
  target?: HTMLAttributeAnchorTarget | undefined;
};

export const LinkButton = ({ href, text, showIcon = true, variant = 'default', color, icon, target, className, size = 'default', ...rest }: LinkButtonProps) => {
  const ButtonIcon = icon != null ? icon : <Icon path={mdiArrowRight} size={0.8} />;

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn('whitespace-normal', className)}
      style={color ? { color } : undefined}
      {...rest}
    >
      <NextLink href={href} target={target}>
        {text}
        {showIcon && <span className="ml-2">{ButtonIcon}</span>}
      </NextLink>
    </Button>
  );
};
