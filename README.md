# react-native-splitview

React Native module that allow to manage multiple Navigator at the same time to create Master-Detail layout for tablet.
Thanks to retyui's [react-native-split-view-demo](https://github.com/retyui/react-native-split-view-demo) for his work that inspire
this module.

## Installation

```sh
npm install react-native-splitview @react-navigation/native
```

## Usage


```ts
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { setMasterNavigator, SplitView } from 'react-native-splitview';
import MasterStack from './stacks/MasterStack';
import DetailStack from './stacks/DetailStack';

const Stack = createNativeStackNavigator();

const MainSplitView = () => {
  return (
    <SplitView
      master={<MasterStack />}
      detail={<DetailStack />}
    />;
  )
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

```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

See the [MIT license](LICENZE.md)

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
