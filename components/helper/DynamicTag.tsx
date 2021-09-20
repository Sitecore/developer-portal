import React, { forwardRef } from 'react';

type DynamicTagProps = {
  tag: string;
  children?: React.ReactNode | React.ReactNode[];
  [name: string]: unknown;
};

export const DynamicTag = forwardRef(({ tag, children, ...props }: DynamicTagProps, ref) => {
  return React.createElement(tag, props, children);
});

export default DynamicTag;
