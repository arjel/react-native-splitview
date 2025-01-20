import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import { useIsTablet } from './useIsTablet';
import { useEffect } from 'react';

const useSystemBack = () => {
  const isTablet = useIsTablet();
  const navigation = useNavigation();

  useEffect(() => {
    if (!isTablet) {
      return;
    }

    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (navigation == null) {
          return false;
        }

        if (navigation.canGoBack() && navigation.isFocused()) {
          navigation.goBack();

          return true;
        }

        return false;
      }
    );

    return () => subscription.remove();
  }, [navigation, isTablet]);
};

export default useSystemBack;
