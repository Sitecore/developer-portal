import { classnames, TTailwindString } from '@/src/common/types/tailwindcss-classnames';
import React from 'react';

type VerticalGroupSize = 'md' | 'lg';

type VerticalGroupProps = {
  children: React.ReactNode | React.ReactNodeArray;
  size?: VerticalGroupSize;
};

const verticalGroupClasses: Record<VerticalGroupSize, TTailwindString> = {
  md: classnames('mb-16'),
  lg: classnames('mb-24'),
};

const VerticalGroup = ({ children, size = 'md' }: VerticalGroupProps): JSX.Element => {
  if (!Array.isArray(children)) {
    return <>{children}</>;
  }

  return (
    <>
      {children.map((child, i) => {
        if (React.isValidElement(child)) {
          return (
            <div
              className={classnames({
                [verticalGroupClasses[size]]: i !== children.length - 1,
              })}
              key={i}
            >
              {child}
            </div>
          );
        } else if (Array.isArray(child)) {
          return child.map((c, j) => (
            <div
              className={classnames({
                [verticalGroupClasses[size]]: i !== children.length - 1,
              })}
              key={j}
            >
              {c}
            </div>
          ));
        }
      })}
    </>
  );
};

export default VerticalGroup;
