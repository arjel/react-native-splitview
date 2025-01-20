import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharacterDetailScreen from '../screens/CharacterDetailScreen';
import PlaceholderScreen from '../screens/PlaceholderScreen';
import { Platform } from 'react-native';

const Stack = createNativeStackNavigator();

const DetailStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Placeholder"
      screenOptions={{
        animation:
          Platform.OS === 'ios' ? 'ios_from_right' : 'fade_from_bottom',
      }}
    >
      <Stack.Screen name="Placeholder" component={PlaceholderScreen} />
      <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} />
    </Stack.Navigator>
  );
};

export default DetailStack;
