import {
  StackActions,
  CommonActions,
  type NavigationContainerRef,
  type NavigationAction,
} from '@react-navigation/native';

class Navigator {
  navigator: NavigationContainerRef<ReactNavigation.RootParamList> | null =
    null;

  /**
   * Set the NavigatorContainer instance when it is mounted
   *
   * @param {NavigationContainerRef<ReactNavigation.RootParamList>} navigatorInstance
   */
  setNavigator = (
    navigatorInstance: NavigationContainerRef<ReactNavigation.RootParamList>
  ) => {
    this.navigator = navigatorInstance;
  };

  /**
   * Check if the NavigatorContainer instance is mounted
   */
  isMounted = () => Boolean(this.navigator);

  /**
   * Reset the stack to a screen
   *
   * @param {string} screenName
   * @param {Record<string, any>} params
   */
  setRoot = (screenName: string, params: Record<string, any>) =>
    this._dispatch(StackActions.replace(screenName, params));

  /**
   * Navigate to a screen
   *
   * @param {string} screenName
   * @param {Record<string, any>} params
   */
  navigate = (screenName: string, params: Record<string, any>) =>
    this._dispatch(CommonActions.navigate({ name: screenName, params }));

  /**
   * Push a screen to the stack
   *
   * @param {string} screenName
   * @param {Record<string, any>} params
   */
  push = (screenName: string, params: Record<string, any>) =>
    this._dispatch(StackActions.push(screenName, params));

  /**
   * Dispatch an action to the NavigatorContainer instance
   *
   * @param {ReturnType<typeof CommonActions.navigate>} action
   */
  private _dispatch = (action: NavigationAction) => {
    this.navigator?.dispatch(action);
  };
}

export default Navigator;
