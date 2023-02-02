// Global
import Link from 'next/link';
import { classnames } from '@/src/common/types/tailwindcss-classnames';
// Components
import ConditionalWrapper from '@/src/components/common/ConditionalWrapper';

type NavLinkProps = {
  text: string;
  url?: string;
  level?: number;
  external?: boolean;
  onClick?: (event: React.MouseEvent) => void;
};

const Level1Classes = classnames('font-semibold', 'lg:text-base', 'mb-4', 'lg:mb-2');

const Level2Classes = classnames('text-xs');

/*
 * A simple wrapper for nav link items within the menus.
 */
const NavLink = ({ text, url, level, external, onClick, ...props }: NavLinkProps): JSX.Element => {
  return (
    <ConditionalWrapper
      condition={!!url}
      wrapper={(children) => (
        <Link
          href={url as string}
          className={classnames('inline-block', 'hover:underline')}
          onClick={onClick}
          {...props}
        >
          {children}
        </Link>
      )}
    >
      <span
        className={classnames('block', {
          [Level1Classes]: level === 1,
          [Level2Classes]: level !== 1,
        })}
      >
        {text}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={
            external
              ? classnames('h-4', 'w-4', 'ml-1', 'mb-1', 'inline-flex')
              : classnames('hidden')
          }
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </span>
    </ConditionalWrapper>
  );
};

export default NavLink;
