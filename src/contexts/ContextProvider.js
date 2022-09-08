import React from 'react';
import {Provider} from 'react-redux';
import {store} from '@/store';
import {AuthProvider} from './AuthProvider';
import {FilterProvider} from './FilterProvider';

export const ContextProvider = props => {
  const {children} = props;

  return (
    <Provider store={store}>
      <AuthProvider>
        <FilterProvider>{children}</FilterProvider>
      </AuthProvider>
    </Provider>
  );
};
