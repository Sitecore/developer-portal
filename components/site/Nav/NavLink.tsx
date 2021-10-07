// Global
import Link from 'next/link';
import { classnames } from 'tailwindcss-classnames';
// Components
import ConditionalWrapper from '@/components/helper/ConditionalWrapper';

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
const NavLink = ({ text, url, level, external, onClick }: NavLinkProps): JSX.Element => {
  return (
    <ConditionalWrapper
      condition={!!url}
      wrapper={(children) => (
        <Link href={url as string}>
          <a className={classnames('inline-block', 'hover:underline')} onClick={onClick}>
            {children}
          </a>
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
          viewBox="0 0 16 16"
          className={external ? classnames('w-em', 'h-em', 'scale-75', 'transform-gpu', 'inline', 'ml-1') : classnames('hidden')} >
          <path
            d="m13.806 13.33-.023-10.683a.432.432 0 0 0-.43-.43L2.67 2.194a.427.427 0 0 0-.429.429v.357c.001.238.194.43.431.43l9.035.02-9.493 9.493a.43.43 0 0 0 .001.607l.254.254a.43.43 0 0 0 .607.001l9.493-9.493.02 9.035c0 .237.192.43.43.43l.357.001c.238 0 .43-.191.429-.429Z"
            fill="currentColor"
            fillRule="evenodd" />
        </svg>
      </span>
      
    </ConditionalWrapper>
  );
};

export default NavLink;
