import React, { createContext, useContext, useReducer } from 'react';

export const EnyeContext = createContext();

export const EnyeProvider = ({reducer, initialState, children}) => (
    <EnyeContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </EnyeContext.Provider>
); 

export const useEnyeState = () => useContext(EnyeContext);