import React from 'react';

type DynamicTagProps = {
  tag: string;
  children?: React.ReactNode | React.ReactNode[];
  [name: string]: unknown;
};

const DynamicTag = ({ tag, children, ...props }: DynamicTagProps): React.ReactElement =>
  React.createElement(tag, props, children);

export default DynamicTag;
