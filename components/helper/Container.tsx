import React from 'react';
import { classnames, TArg, TTailwindString } from 'tailwindcss-classnames';

export type ContainerSize = 'standard';

const containerSizes: Record<string, TArg> = {
  ['lg']: 'max-w-screen-xl',
  ['xl']: 'max-w-screen-xl',
  ['2xl']: 'max-w-screen-2xl',
};

const containerMargins: Record<string, TTailwindString> = {
  ['default']: classnames('mx-auto'),
  ['all']: classnames('-mx-gutter', 'md:-mx-gutter-md'),
  ['standard']: classnames('lg:mx-auto'),
};

export type ContainerProps = {
  size?: ContainerSize;
  children: React.ReactNode | React.ReactNode[];
  className?: TTailwindString | TArg;
};

const sizes: Record<string, { width: TArg; margin?: TTailwindString | TArg }> = {
  standard: {
    width: containerSizes['lg'],
  },
};

const Container = ({ size = 'standard', children, className }: ContainerProps): JSX.Element => {
  const validSize = typeof size !== 'undefined' && sizes.hasOwnProperty(size) ? size : 'standard';
  const hasMarginModifiers =
    typeof sizes[validSize].margin !== 'undefined' && sizes[validSize].margin !== null
      ? true
      : false;

  return (
    <div
      className={classnames(
        sizes[validSize].width,
        {
          [sizes[validSize].margin as string]: hasMarginModifiers,
          [containerMargins['default']]: !hasMarginModifiers,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
