import { StyleSheet, Text, View } from 'react-native';

const PlaceholderScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Please choose chat on the left panel!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    opacity: 0.6,
    padding: 10,
  },
});

export default PlaceholderScreen;
