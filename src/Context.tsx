import React, { FunctionComponent } from 'react';
import store, { TStore } from './store';
import { useLocalStore } from 'mobx-react';

export const storeContext = React.createContext<TStore | null>(null);

export const StoreProvider: FunctionComponent = ({ children }) => {
  const value = useLocalStore(() => store);
  return (
    <storeContext.Provider value={value}>{children}</storeContext.Provider>
  );
};

export default StoreProvider;
