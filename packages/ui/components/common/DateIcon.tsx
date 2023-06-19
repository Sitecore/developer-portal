export type DateIconVariant = 'simple' | 'calendar';

export type DateIconProps = {
  type: DateIconVariant;
  className?: string;
  date: string;
};

const DateIcon = ({ date, className, type }: DateIconProps): JSX.Element => {
  if (type == 'calendar')
    return (
      <div className={`mr-4 w-10 flex-none rounded-t pb-2 text-center shadow-lg lg:rounded-l lg:rounded-t-none ${className}`}>
        <div className="text-2xs bg-primary-100 text-primary-900 w-full py-1 dark:bg-teal-800 dark:text-teal-100">{new Date(date).toLocaleString('en-US', { month: 'short' })}</div>
        <div className="border-l border-r border-white bg-white pt-1 dark:text-teal-900">
          <span className="text-lg font-semibold leading-tight">{new Date(date).toLocaleString('en-US', { day: '2-digit' })}</span>
        </div>
      </div>
    );

  return (
    <div className="bg-theme-bg-alt text-theme-text border-theme-border-alt bg-primary mr-4 border p-2 text-center leading-tight">
      <time className={`flex items-center justify-center text-xs`} dateTime="2022-10-21T15:48:00.000Z">
        {new Date(date).getDay()}
        <br />
        {new Date(date).toLocaleString('en-US', { month: 'short' })}
      </time>
    </div>
  );
};

DateIcon.defaultProps = {
  className: '',
};

export default DateIcon;
