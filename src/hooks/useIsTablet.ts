import { Dimensions } from 'react-native';

export const useIsTablet = () => {
  const { width, height } = Dimensions.get('window');
  const aspectRatio = height / width;

  // Consider tablet if width is greater than 600dp or the aspect ratio is less than a typical smartphone threshold
  return width >= 600 || aspectRatio < 1.6;
};
