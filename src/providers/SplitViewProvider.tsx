import { type PropsWithChildren, useState } from 'react';
import Navigator from '../models/Navigator';
import { SplitViewContext } from './SplitViewContext';
import { masterNavigator } from '../constants/masterNavigator';

const SplitViewProvider = ({ children }: PropsWithChildren<object>) => {
  const [_masterNavigator] = useState<Navigator>(masterNavigator);
  const [detailNavigator] = useState<Navigator>(new Navigator());

  return (
    <SplitViewContext.Provider
      value={{
        masterNavigator: _masterNavigator,
        detailNavigator,
      }}
    >
      {children}
    </SplitViewContext.Provider>
  );
};

export default SplitViewProvider;
