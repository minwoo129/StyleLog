import React from 'react';
import {ContextProviderType} from './types';

const ContextProvider: ContextProviderType = ({contexts, children}) =>
  contexts.reduce(
    (prev, context) => React.createElement(context, {children: prev}),
    children,
  );

export default ContextProvider;
