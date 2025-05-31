import React, { useContext, useReducer } from 'react'
import Reducer from '../hooks/Reducer';

export const Context  =  React.createContext();
// data layer 
export const StateProvider = ({reducer,init}) => (
   <Context.Provider value={useReducer(reducer,init)}>
    {/* {child} */}
    </Context.Provider>
  
);

export const useStateValue = ()=>useContext(Context);