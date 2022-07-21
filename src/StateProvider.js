import React, { createContext, useContext, useReducer } from 'react';

//Prepares the Datalayer
export const StateContext = createContext();

//Wrap our nap and provide the Data layer 
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pull informtion from the
export const useStateValue = () => useContext(StateContext);

