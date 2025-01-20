import { useCallback, useContext, useMemo } from 'react';
import { SplitViewContext } from '../providers/SplitViewContext';

export const useSplitView = () => {
  const { masterNavigator, detailNavigator } = useContext(SplitViewContext);

  /**
   * Push a new route on the master navigator
   *
   * @param routeName The name of the route to push
   * @param params The params to pass to the route
   */
  const pushOnMaster = useCallback(
    (routeName: string, params: Record<string, any> = {}) => {
      masterNavigator.push(routeName, params);
    },
    [masterNavigator]
  );

  /**
   * Reset the details navigator with a new stack starting from this new route
   *
   * @param routeName The name of the route to navigate
   * @param params The params to pass to the route
   */
  const resetDetail = useCallback(
    (routeName: string, params: Record<string, any> = {}) => {
      detailNavigator.setRoot(routeName, params);
    },
    [detailNavigator]
  );

  /**
   * If the detail navigator is available, navigate a new route on it,
   * otherwise navigate to a new route on the master navigator
   *
   * @param routeName The name of the route to navigate
   * @param params The params to pass to the route
   */
  const navigateOnDetail = useCallback(
    (routeName: string, params: Record<string, any> = {}) => {
      if (detailNavigator.isMounted()) {
        detailNavigator.navigate(routeName, params);
      } else {
        masterNavigator.navigate(routeName, params);
      }
    },
    [detailNavigator, masterNavigator]
  );

  /**
   * If the detail navigator is available, push a new route on it,
   * otherwise push a new route on the master navigator
   *
   * @param routeName The name of the route to push
   * @param params The params to pass to the route
   */
  const pushOnDetail = useCallback(
    (routeName: string, params: Record<string, any> = {}) => {
      if (detailNavigator.isMounted()) {
        detailNavigator.push(routeName, params);
      } else {
        masterNavigator.push(routeName, params);
      }
    },
    [detailNavigator, masterNavigator]
  );

  return useMemo(
    () => ({
      setDetailNavigator: detailNavigator.setNavigator,
      pushOnMaster,
      resetDetail,
      navigateOnDetail,
      pushOnDetail,
    }),
    [
      detailNavigator.setNavigator,
      navigateOnDetail,
      pushOnDetail,
      pushOnMaster,
      resetDetail,
    ]
  );
};
