import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Gestureanimationdemo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gestureanimation demo</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Gestureanimationdemo;
