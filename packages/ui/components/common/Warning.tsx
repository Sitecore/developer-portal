import SvgIcon, { IconNames } from './SvgIcon';

type AlertProps = {
  icon: IconNames;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

export const Warning = ({ children, icon, className }: AlertProps) => {
  return (
    <div role="warning" className={`${className} text-theme-text mt-8 inline-flex w-full rounded-lg bg-orange-100 px-4 py-3 text-xs dark:bg-teal-700`}>
      <SvgIcon icon={icon} className="relative top-0.5 mr-4 h-12 w-12 text-orange-500 dark:text-teal-100 md:mr-2 md:h-5 md:w-5" width={24} height={24} />
      {children}
    </div>
  );
};
