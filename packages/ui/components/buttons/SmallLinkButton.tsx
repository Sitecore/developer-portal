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
    <a
      href={href}
      target={target}
      rel="noreferrer noopener"
      className={`btn-primary hover:border-theme-border text-theme-text-alt hover:bg-theme-bg hover:text-charcoal-light bg-theme-bg dark:focus:ring-charcoal dark:hover:text-charcoal mr-3 flex items-center border border-white px-4 py-2 text-xs  font-medium transition-all hover:border focus:z-10 focus:outline-none focus:ring-2 ${
        className ? className : ''
      }`}
    >
      {target === '_blank' && <span className="sr-only">Opens in a new tab</span>}
      <SvgIcon icon={icon} width={24} height={24} className="mr-2 h-4 w-4" />
      <span className="label">{text}</span>
    </a>
  );
};

export default LinkButton;
