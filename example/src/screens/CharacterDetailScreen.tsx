import { StyleSheet, Text, View } from 'react-native';

const CharacterDetailScreen = ({ route }: any) => {
  const hero = route?.params;

  return (
    hero && (
      <View style={styles.container}>
        <Text style={styles.title}>{hero.name}</Text>
        <Text style={styles.description}>{hero.description}</Text>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
});

export default CharacterDetailScreen;
