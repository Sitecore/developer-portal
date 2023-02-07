// Global
import Link from 'next/link';
// Components
import SvgIcon from '@/src/components/common/SvgIcon';

type TextLinkProps = {
  text: string;
  href: string;
  className?: string;
  target?: '_blank' | undefined;
};

const TextLink = ({ text, href, target, className }: TextLinkProps): JSX.Element => {
  return (
    <Link
      href={href}
      target={target}
      rel="noreferrer noopener"
      className={`group btn-text-link ${className}`}
    >
      {text}
      {target === '_blank' && <span className="sr-only">Opens in a new tab</span>}
      <span className="inline-block w-5 h-5 ml-1 transition-transform duration-300 transform-gpu group-focus:translate-x-1 group-hover:translate-x-1">
        <SvgIcon icon="arrow-right" className="text-violet dark:text-red relative top-0.5" />
      </span>
    </Link>
  );
};
TextLink.defaultProps = {
  className: '',
};

export default TextLink;
