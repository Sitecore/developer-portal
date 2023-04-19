import SvgIcon from './SvgIcon';

type MessageProps = {
  type: Type;
  children: React.ReactNode | React.ReactNode[];
};

export const Type = {
  Alert: 'alert',
  Info: 'info',
  Error: 'error',
} as const;

type Type = (typeof Type)[keyof typeof Type];

export const Message = ({ children, type }: MessageProps): JSX.Element => {
  if (type == Type.Info) {
    return (
      <div role="alert" className={`text-theme-text mt-8 inline-flex w-full rounded-lg bg-blue-100 px-4 py-3 text-xs dark:bg-teal-700`}>
        <SvgIcon icon={'info'} className="relative top-0.5 mr-4 h-12 w-12 text-blue-500 dark:text-teal-100 md:mr-2 md:h-5 md:w-5" width={24} height={24} />
        {children}
      </div>
    );
  }
  if (type == Type.Alert) {
    return (
      <div role="alert" className={`text-theme-text mt-8 inline-flex w-full rounded-lg bg-orange-100 px-4 py-3 text-xs dark:bg-teal-700`}>
        <SvgIcon icon={'alert'} className="relative top-0.5 mr-4 h-12 w-12 text-orange-500 dark:text-teal-100 md:mr-2 md:h-5 md:w-5" width={24} height={24} />
        {children}
      </div>
    );
  }

  if (type == Type.Error) {
    return (
      <div role="error" className={`text-theme-text mt-8 inline-flex w-full rounded-lg bg-red-100 px-4 py-3 text-xs dark:bg-teal-700`}>
        <SvgIcon icon={'error'} className="relative top-0.5 mr-4 h-12 w-12 text-red-500 dark:text-teal-100 md:mr-2 md:h-5 md:w-5" width={24} height={24} />
        {children}
      </div>
    );
  }

  return <></>;
};
