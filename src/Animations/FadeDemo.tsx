import React, {useRef} from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';

const FadeDemo: React.FC = () => {

  //useRef is used to keep values and not change during re-renders.
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const handleFadeIn = () => {
    //Animated.timing() is use d for smooth tranistions in animation
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const handleFadeOut = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Fade Demo</Text>

      {/* It is used for animations */}
      <Animated.View
        style={[
          styles.box,
          {opacity: fadeAnimation},
        ]}></Animated.View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleFadeIn} style={styles.btn}>
          <Text style={styles.btnText}>Fade INN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFadeOut} style={styles.btn}>
          <Text style={styles.btnText}>Fade OUT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  box: {
    borderRadius: 8,
    borderWidth: 1,
    height: 300,
    width: 300,
    marginVertical: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 10,
    shadowRadius: 5,
    backgroundColor: 'crimson',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  btn: {
    borderRadius: 8,
    borderWidth: 0.5,
    backgroundColor: 'lightblue',
    margin: 10,
  },
  btnText: {
    margin: 10,
    paddingHorizontal: 10,
    fontSize: 18,
  },
});

export default FadeDemo;
