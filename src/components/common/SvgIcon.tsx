import dynamic from 'next/dynamic';
import { classnames, TTailwindString } from '@/src/common/types/tailwindcss-classnames';

export type IconNames =
  | 'arrow-left'
  | 'arrow-right'
  | 'checkbox-empty'
  | 'checkbox-filled'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'heading'
  | 'quick-links';

export type IconProps = {
  icon: IconNames;
  className?: TTailwindString;
};

const SvgIcon = ({ icon, className }: IconProps): JSX.Element => {
  const IconContent = dynamic(() => import(`./icons/icon--${icon}`));
  const viewBox = '0 0 90 90';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={classnames(className)}
      display={'block'}
    >
      <IconContent />
    </svg>
  );
};

export default SvgIcon;
