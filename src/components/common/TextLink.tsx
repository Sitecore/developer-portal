// Global
import React from 'react';
import { classnames, TTailwindString } from '@/src/common/types/tailwindcss-classnames';
import Link from 'next/link';
// Components
import SvgIcon from '@/src/components/common/SvgIcon';

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
        rel="noreferrer noopener"
        className={classnames(
          'group',
          'font-bold',
          'text-sm',
          'inline-flex',
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
            'ml-1',
            'transform-gpu',
            'transition-transform',
            'w-5',
            'group-focus:translate-x-1',
            'group-hover:translate-x-1'
          )}
        >
          <SvgIcon
            icon="arrow-right"
            className={classnames('text-violet', 'dark:text-red', 'relative', 'top-0.5')}
          />
        </span>
      </a>
    </Link>
  );
};

export default TextLink;
