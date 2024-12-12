import React, { JSX } from 'react';

type ConditionalWrapProps = {
  condition: boolean;
  // eslint-disable-next-line no-unused-vars
  wrapper: (children: JSX.Element) => JSX.Element;
  children: JSX.Element;
};

export const ConditionalWrapper = ({ condition, wrapper, children }: ConditionalWrapProps) => {
  return condition ? React.cloneElement(wrapper(children)) : children;
};

export default ConditionalWrapper;
