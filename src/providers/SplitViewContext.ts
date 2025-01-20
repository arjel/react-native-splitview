import { createContext } from 'react';
import Navigator from '../models/Navigator';

export interface SplitViewContextType {
  masterNavigator: Navigator;
  detailNavigator: Navigator;
}

export const SplitViewContext = createContext<SplitViewContextType>(
  {} as SplitViewContextType
);
