import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AnimationScreenTypeProp} from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

const topic = [
  {
    id: 1,
    name: 'FadeDemo',
    screen: 'FadeDemoScreen',
  },
];

//Animation screen prop to navigate
type AnimationScreenNavigationProp = StackNavigationProp<
  AnimationScreenTypeProp,
  'AnimationScreen'
>;

//to navigate on other screens we use navigation in props.
type props = {
  navigation: AnimationScreenNavigationProp;
};

//main function.
const AnimationDemo: React.FC<props> = ({navigation}) => {

    //handle renderItem
  const handleRenderItem = ({
    item,
  }: {
    item: {id: number; name: string; screen: string};
  }) => (
    <TouchableOpacity
      style={styles.listContainer}
      onPress={() =>
        navigation.navigate(item.screen as keyof AnimationScreenTypeProp)
      }>
      <Text style={styles.listText}>{item.name}</Text>
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Animation Screen</Text>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={topic}
        renderItem={handleRenderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  header: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  listContainer: {
    margin: 10,
    paddingHorizontal: 15,
    backgroundColor: 'lightgrey',
    paddingVertical: 15,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  listText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AnimationDemo;
