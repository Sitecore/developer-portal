import React from 'react';

type ConditionalWrapProps = {
  condition: boolean;
  wrapper: (children: JSX.Element) => JSX.Element;
  children: JSX.Element;
};

const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: ConditionalWrapProps): JSX.Element => {
  return condition ? React.cloneElement(wrapper(children)) : children;
};

export default ConditionalWrapper;
