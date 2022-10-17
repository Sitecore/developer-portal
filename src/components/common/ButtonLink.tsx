// Global
import { classnames, TTailwindString } from '@/src/common/types/tailwindcss-classnames';
import Link from 'next/link';
// Components
import SvgIcon from '@/src/components/common/SvgIcon';

type ButtonLinkProps = {
  text: string;
  href: string;
  className?: TTailwindString;
  target?: '_blank' | undefined;
};

const ButtonLink = ({ text, href, target, className }: ButtonLinkProps): JSX.Element => {
  return (
    <Link href={href}>
      <a
        target={target}
        rel="noreferrer noopener"
        className={classnames(
          'bg-violet',
          'focus:bg-violet-dark',
          'font-semibold',
          'hover:bg-violet-dark',
          'inline-block',
          'px-12',
          'py-4',
          'text-sm',
          'text-white',
          'rounded-full',
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
            className={classnames('text-white', 'dark:text-red', 'relative', 'top-0.5')}
          />
        </span>
      </a>
    </Link>
  );
};

export default ButtonLink;
