// Global
// Components
import SvgIcon, { IconNames } from 'ui/components/common/SvgIcon';

type LinkButtonProps = {
  text: string;
  href: string;
  icon: IconNames;
  className?: string;
  target?: '_blank' | undefined;
};

const LinkButton = ({ text, href, icon, target, className }: LinkButtonProps): JSX.Element => {
  return (
    <a href={href} target={target} rel="noreferrer noopener" className={`not-prose btn-iconlink ${className ? className : ''}`}>
      {target === '_blank' && <span className="sr-only">Opens in a new tab</span>}
      <SvgIcon icon={icon} width={24} height={24} className="mr-2 h-4 w-4" />
      <span className="label">{text}</span>
    </a>
  );
};

export default LinkButton;
