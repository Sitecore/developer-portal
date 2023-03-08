/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { forwardRef } from 'react';

type DynamicTagProps = {
  tag: string;
  children?: React.ReactNode | React.ReactNode[];
  [name: string]: unknown;
};

const DynamicTag = forwardRef(({ tag, children, ...props }: DynamicTagProps, ref) => {
  return React.createElement(tag, props, children);
});

export default DynamicTag;
