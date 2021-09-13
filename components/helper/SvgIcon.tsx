import dynamic from 'next/dynamic';
import { classnames, TTailwindString } from 'tailwindcss-classnames';

export type IconNames = 'quick-links' | 'arrow-right' | 'arrow-left';

export type IconProps = {
  icon: IconNames;
  className?: TTailwindString;
};

const SvgIcon = ({ icon, className }: IconProps): JSX.Element => {
  const IconContent = dynamic(() => import(`./icons/icon--${icon}`));
  const viewBox = '0 0 90 90';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} className={classnames(className)}>
      <IconContent />
    </svg>
  );
};

export default SvgIcon;
