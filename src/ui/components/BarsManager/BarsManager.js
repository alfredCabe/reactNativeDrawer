import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { initialState, reducer, buildActions } from './BarsManager.store';

export const BarsManagerContext = createContext();

export const useBarsManager = () => {
  const context = useContext(BarsManagerContext);
  if (!context) {
    throw new Error('Can not use "useBarsManager" without an BarsManagerProvider!');
  }
  return context;
};

const BarsManager = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = buildActions({ dispatch });

  return (
    <BarsManagerContext.Provider value={{ ...state, ...actions }}>
      {children}
    </BarsManagerContext.Provider>
  );
};

BarsManager.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BarsManager;
