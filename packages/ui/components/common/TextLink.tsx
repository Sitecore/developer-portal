// Global
import Link from 'next/link';
// Components
import SvgIcon from 'ui/components/common/SvgIcon';

type TextLinkProps = {
  text: string;
  href: string;
  className?: string;
  target?: '_blank' | undefined;
};

const TextLink = ({ text, href, target, className }: TextLinkProps): JSX.Element => {
  return (
    <Link href={href} target={target} rel="noreferrer noopener" className={`btn-text-link group ${className}`}>
      {text}
      {target === '_blank' && <span className="sr-only">Opens in a new tab</span>}
      <span className="ml-1 inline-block h-5 w-5 transform-gpu transition-transform duration-300 group-hover:translate-x-1 group-focus:translate-x-1">
        <SvgIcon icon="arrow-right" className="text-violet dark:text-red top-0.5" />
      </span>
    </Link>
  );
};
TextLink.defaultProps = {
  className: '',
};

export default TextLink;
