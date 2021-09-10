// Global
import Link from 'next/link';
import { classnames } from 'tailwindcss-classnames';
// Components
import ConditionalWrapper from '@/components/ConditionalWrapper';

type NavLinkProps = {
  text: string;
  url?: string;
  level?: number;
  onClick?: (event: React.MouseEvent) => void;
};

const Level1Classes = classnames('font-semibold', 'lg:text-lg', 'mb-4', 'lg:mb-2');

const Level2Classes = classnames('text-xs', 'lg:text-base');

/*
 * A simple wrapper for nav link items within the menus.
 */
const NavLink = ({ text, url, level, onClick }: NavLinkProps): JSX.Element => {
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
      </span>
    </ConditionalWrapper>
  );
};

export default NavLink;
