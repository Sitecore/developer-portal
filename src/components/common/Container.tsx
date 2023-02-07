import React from 'react';

export type ContainerSize = 'standard';

const containerSizes: Record<string, string> = {
  ['lg']: 'max-w-screen-xl',
  ['xl']: 'max-w-screen-xl',
  ['2xl']: 'max-w-screen-2xl',
};

const containerMargins: Record<string, string> = {
  ['default']: 'mx-auto',
  ['all']: '-mx-gutter md:-mx-gutter-md',
  ['standard']: 'lg:mx-auto',
};

export type ContainerProps = {
  size?: ContainerSize;
  children: React.ReactNode | React.ReactNode[];
  className?: string | undefined;
};

const sizes: Record<string, { width: string; margin?: string | undefined }> = {
  standard: {
    width: containerSizes['lg'],
  },
};

const Container = ({ size = 'standard', children, className }: ContainerProps): JSX.Element => {
  const validSize = typeof size !== 'undefined' && sizes.size ? size : 'standard';
  const hasMarginModifiers =
    typeof sizes[validSize].margin !== 'undefined' && sizes[validSize].margin !== null
      ? true
      : false;

  return (
    <div
      className={`px-gutter-all ${sizes[validSize].width} ${
        hasMarginModifiers
          ? [sizes[validSize].margin as string].join(' ')
          : [containerMargins['default']].join(' ')
      } ${className ? className : ''}`}
    >
      {children}
    </div>
  );
};

export default Container;
