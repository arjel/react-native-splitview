import { forwardRef } from 'react';
import { Platform } from 'react-native';
import useSystemBack from './useSystemBack';

import { type ComponentType } from 'react';

const withSystemBackFix = (Comp: ComponentType<any>) =>
  Platform.select({
    android: forwardRef(function ComponentWithBack(props, ref) {
      useSystemBack();
      return <Comp ref={ref} {...props} />;
    }),
    default: forwardRef((props, ref) => <Comp ref={ref} {...props} />),
  });

export default withSystemBackFix;
