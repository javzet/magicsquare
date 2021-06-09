import React, { ProviderProps, ReactNode, useState } from 'react';
import { DataContext } from '../helpers/createContext';

export const MagicSquareContext = ({
  children,
  value,
}: {
  children: ReactNode;
  value: ProviderProps<any>['value'];
}) => {
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
