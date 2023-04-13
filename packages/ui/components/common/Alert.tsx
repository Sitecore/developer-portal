import SvgIcon, { IconNames } from './SvgIcon';

type AlertProps = {
  icon: IconNames;
  children: React.ReactNode | React.ReactNode[];
};

export const Alert = ({ children, icon }: AlertProps) => {
  return (
    <div role="alert" className={`text-theme-text mt-8 inline-flex w-full rounded-lg bg-blue-100 px-4 py-3 text-xs`}>
      <SvgIcon icon={icon} className="relative top-0.5 mr-2 h-5 w-5 text-blue-500" width={24} height={24} />
      {children}
    </div>
  );
};
