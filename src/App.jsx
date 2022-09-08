import React from 'react';
import { ContextProvider } from '@/contexts/ContextProvider';
import {Bangkok} from "pages/Bangkok";

export const App = () => {
  return (
    <ContextProvider>
      <Bangkok/>
    </ContextProvider>
  );
}
