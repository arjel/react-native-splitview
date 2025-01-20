import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { setMasterNavigator, SplitView } from 'react-native-splitview';
import MasterStack from './stacks/MasterStack';
import DetailStack from './stacks/DetailStack';

const Stack = createNativeStackNavigator();

const MainSplitView = () => {
  return <SplitView master={<MasterStack />} detail={<DetailStack />} />;
};

export default function App() {
  return (
    <NavigationContainer ref={setMasterNavigator}>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainSplitView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
