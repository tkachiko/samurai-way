import React from 'react';
import {ReduxStateType, StoreType} from './redux/redux-store';
import {Store} from 'redux';
import {ActionsTypes} from './types/types';

export type ProviderType = {
  store: StoreType
  children: React.ReactNode
}

export const StoreContext = React.createContext({} as Store<ReduxStateType, ActionsTypes>);

export const Provider: React.FC<ProviderType> = (props) => {
  return <StoreContext.Provider value={props.store}>
    {props.children}
  </StoreContext.Provider>;
};