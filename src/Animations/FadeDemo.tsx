import React, {useRef} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Easing,
} from 'react-native';
import AnimationDemo from './AnimationDemo';

const FadeDemo: React.FC = () => {
  //useRef is used to keep values and not change during re-renders.
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const transAnimation = useRef(new Animated.Value(0)).current;
  const scaleAnimationX = useRef(new Animated.Value(0)).current;
  const scaleAnimation = useRef(new Animated.Value(0)).current;

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

  const handleTranslate = () => {
    Animated.timing(transAnimation, {
      toValue: 100,
      duration: 1000,
      easing: Easing.bezier(0.42, 0, 0.58, 1),
      useNativeDriver: true,
    }).start();
  };
  const handleTranslateReverse = () => {
    Animated.sequence([
    Animated.timing(transAnimation, {
      toValue: 0,
      duration: 1000,
      easing: Easing.bezier(0.42, 0, 0.58, 1),
      useNativeDriver: true,
    }),
    Animated.timing(transAnimation, {
      toValue: 75,
      duration: 1000,
      easing: Easing.bezier(0.42, 0, 0.58, 1),
      useNativeDriver: true,
    }),
    Animated.timing(transAnimation,{
      toValue: -50,
      duration:500,
      useNativeDriver:true
    })
  ]).start();
  };

  const handleScale = () => {
    Animated.sequence([
      Animated.timing(scaleAnimation, {
        toValue: 1.5,
        duration:1000,
        useNativeDriver:true
      }),
      Animated.timing(scaleAnimation, {
        toValue: .25,
        duration:1000,
        useNativeDriver:true
      }),
      Animated.timing(scaleAnimation, {
        toValue: 1,
        duration:1000,
        useNativeDriver:true
      }),
    ]).start();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Fade Demo Animation */}
      <Text style={styles.header}>Fade Demo</Text>
      {/* It is used for animations */}
      <Animated.View
        style={[styles.box, {opacity: fadeAnimation}]}></Animated.View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleFadeIn} style={styles.btn}>
          <Text style={styles.btnText}>Fade INN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFadeOut} style={styles.btn}>
          <Text style={styles.btnText}>Fade OUT</Text>
        </TouchableOpacity>
      </View>

      {/* Translate Demo */}
      <Text style={styles.header}>Translate Demo</Text>
      <Animated.View
        style={[
          styles.box,
          {
            // Transform property accepts an array of transformation object
            transform: [
              {
                translateX: transAnimation,
              },
            ],
          },
        ]}></Animated.View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={handleTranslate}>
          <Text style={styles.btnText}>Translate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleTranslateReverse}>
          <Text style={styles.btnText}>Translate reverse</Text>
        </TouchableOpacity>
      </View>

      {/*Scale demo*/}
      <Text style={styles.header}>Scale Demo</Text>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              {
                scale: scaleAnimation,
              },
            ],
          },
        ]}></Animated.View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={handleScale}>
          <Text style={styles.btnText}>Scale</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
    alignItems: 'center',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  box: {
    marginHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    height: 200,
    width: 200,
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
