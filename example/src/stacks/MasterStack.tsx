import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharactersScreen from '../screens/CharactersScreen';
import CharacterDetailScreen from '../screens/CharacterDetailScreen';
import { Platform } from 'react-native';

const Stack = createNativeStackNavigator();

const MasterStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Characters"
      screenOptions={{
        animation:
          Platform.OS === 'ios' ? 'ios_from_right' : 'fade_from_bottom',
      }}
    >
      <Stack.Screen name="Characters" component={CharactersScreen} />
      <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} />
    </Stack.Navigator>
  );
};

export default MasterStack;
