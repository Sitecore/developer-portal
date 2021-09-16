// Global
import React from 'react';
import { classnames, TTailwindString } from '@/tailwindcss-classnames';
import Link from 'next/link';
// Components
import SvgIcon from '@/components/helper/SvgIcon';

type TextLinkProps = {
  text: string;
  href: string;
  className?: TTailwindString;
  target?: '_blank' | undefined;
};

const TextLink = ({ text, href, target, className, ...props }: TextLinkProps): JSX.Element => {
  return (
    <Link href={href}>
      <a
        target={target}
        className={classnames(
          'group',
          'font-bold',
          'text-sm',
          'flex',
          'items-center',
          'hover:underline',
          'focus:underline',
          className
        )}
      >
        {text}
        {target === '_blank' && <span className={classnames('sr-only')}>Opens in a new tab</span>}
        <span
          className={classnames(
            'duration-300',
            'h-5',
            'inline-block',
            'ml-2',
            'transform-gpu',
            'transition-transform',
            'w-5',
            'group-focus:translate-x-1',
            'group-hover:translate-x-1'
          )}
        >
          <SvgIcon icon="arrow-right" className={classnames('text-red')} />
        </span>
      </a>
    </Link>
  );
};

export default TextLink;
