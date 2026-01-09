import Link from 'next/link';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import { cn } from '@lib/utils';

type TextLinkProps = {
  href?: string;
  text: string;
  hideIcon?: boolean;
  isHeading?: boolean;
  displayInline?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
};

export const TextLink = ({ href, text, isHeading, hideIcon = false, displayInline = false, className, size = 'md' }: TextLinkProps) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
  };

  if (isHeading) {
    return (
      <h2 className={cn('font-heading', sizeClasses[size], className)}>
        <TextWithLink href={href} text={text} hideIcon={hideIcon} />
      </h2>
    );
  }

  return (
    <p className={cn(className)}>
      <TextWithLink href={href} text={text} hideIcon={hideIcon} displayInline={displayInline} />
    </p>
  );
};

const TextWithLink = ({ href, text, hideIcon, displayInline }: Pick<TextLinkProps, 'href' | 'text' | 'hideIcon' | 'displayInline'>) => (
  <span className={cn(displayInline ? 'inline-flex' : 'flex', 'items-center gap-1')}>
    {href ? (
      <Link href={href} className="text-primary font-semibold hover:underline">
        {text}
      </Link>
    ) : (
      <span className="text-primary font-semibold">{text}</span>
    )}
    {!hideIcon && <Icon path={mdiArrowRight} size={0.8} />}
  </span>
);
