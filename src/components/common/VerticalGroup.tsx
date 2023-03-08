import React from 'react';

type VerticalGroupSize = 'md' | 'lg';

type VerticalGroupProps = {
  children: React.ReactNode | React.ReactNodeArray;
  size?: VerticalGroupSize;
};

const verticalGroupClasses: Record<VerticalGroupSize, string> = {
  md: 'mb-16',
  lg: 'mb-24',
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
              className={`${children.length - 1 ? [verticalGroupClasses[size]].join(' ') : i}`}
              key={i}
            >
              {child}
            </div>
          );
        } else if (Array.isArray(child)) {
          return child.map((c, j) => (
            <div
              className={`${children.length - 1 ? [verticalGroupClasses[size]].join(' ') : i}`}
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
