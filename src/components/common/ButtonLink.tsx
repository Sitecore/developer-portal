// Global
import Link from 'next/link';
// Components
import SvgIcon from '@/src/components/common/SvgIcon';

type ButtonLinkProps = {
  text: string;
  href: string;
  className?: string;
  target?: '_blank' | undefined;
};

const ButtonLink = ({ text, href, target, className }: ButtonLinkProps): JSX.Element => {
  return (
    <Link
      href={href}
      target={target}
      rel="noreferrer noopener"
      className={`btn-primary ${className ? className : ''}`}
    >
      {text}
      {target === '_blank' && <span className="sr-only">Opens in a new tab</span>}
      <span className="play-button-outside">
        <SvgIcon icon="arrow-right" className="play-button-arrow" />
      </span>
    </Link>
  );
};

export default ButtonLink;
