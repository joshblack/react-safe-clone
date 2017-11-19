import React from 'react';

const merge = (owner, child) => (...args) => {
  owner(...args);
  child(...args);
};

const SafeClone = ({ children, ...props }) => {
  const element = React.Children.only(children);
  const propsToClone = {};

  Object.keys(props).forEach(key => {
    propsToClone[key] =
      element.props[key] === undefined
        ? props[key]
        : merge(props[key], element.props[key]);
  });

  return React.cloneElement(element, propsToClone);
};

export default SafeClone;
