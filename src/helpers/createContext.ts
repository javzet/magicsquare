import { createContext, Dispatch } from 'react';

export const DataContext =
  createContext<{ dataTrasnfer: any; setdataTrasnfer: Dispatch<any> } | any>(
    null,
  );
