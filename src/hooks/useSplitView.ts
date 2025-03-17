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

  /**
   * If the split view if active set the root of detail nav
   * otherwise make a simple push on the master nav
   * @param routeName The name of the route to push
   * @param params The params to pass to the route
   */
  const setRootOnDetail = useCallback(
    (routeName: string, params: Record<string, any> = {}) => {
      if (detailNavigator.isMounted()) {
        detailNavigator.setRoot(routeName, params);
      }
      else {
        masterNavigator.push(routeName, params);
      }
    }, [detailNavigator, masterNavigator])

  return useMemo(
    () => ({
      setDetailNavigator: detailNavigator.setNavigator,
      pushOnMaster,
      navigateOnDetail,
      pushOnDetail,
      setRootOnDetail
    }),
    [
      detailNavigator.setNavigator,
      navigateOnDetail,
      pushOnDetail,
      pushOnMaster,
      setRootOnDetail
    ]
  );
};
