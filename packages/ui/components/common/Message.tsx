import SvgIcon from './SvgIcon';

type MessageProps = {
  type: Type;
  children?: React.ReactNode | React.ReactNode[];
  message?: string;
  plain?: boolean;
  className?: string;
};

export const Type = {
  Alert: { background: 'bg-orange-100', text: 'text-orange-500' },
  Info: { background: 'bg-blue-100', text: 'text-blue-500' },
  Error: { background: 'bg-red-100', text: 'text-red-500' },
} as const;

type Type = (typeof Type)[keyof typeof Type];

const baseMessageBoxed = 'rounded-lg px-4 py-3';

export const Message = ({ children, type, plain, message, className }: MessageProps): JSX.Element => {
  return (
    <div role="alert" className={`text-theme-text relative w-full text-xs ${plain ?? `${baseMessageBoxed} ${type.background} dark:bg-teal-700 dark:text-teal-100`} ${className}`}>
      <div className={`flex ${children != null && message != null ? 'max-w-[75%]' : ''} `}>
        <SvgIcon icon={'info'} className={`relative top-0.5 mr-4 h-12 w-12 md:mr-2 md:h-5 md:w-5 ${type.text} dark:fill-teal-100 dark:text-teal-100 `} width={24} height={24} />
        {message != null ? message : children}
      </div>

      {message != null && <div className="absolute right-5 top-3">{children}</div>}
    </div>
  );
};
