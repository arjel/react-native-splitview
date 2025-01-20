import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { superheroes } from '../constants/heroes';
import type { HeroModel } from '../models/hero.model';
import { useSplitView } from 'react-native-splitview';

const CharactersScreen = () => {
  const { pushOnDetail } = useSplitView();

  const renderItem = ({ item }: { item: HeroModel }) => (
    <Pressable onPress={() => pushOnDetail('CharacterDetail', item)}>
      <View style={styles.itemContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <FlatList
      data={superheroes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default CharactersScreen;
