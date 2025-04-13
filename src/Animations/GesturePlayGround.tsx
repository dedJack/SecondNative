import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const GesturePlayGround: React.FC = () => {
  const colors = ['red', 'green', 'yellow', 'purple', 'darkblue'];

  const bgColor = useSharedValue(0);
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);
  const translateX = useSharedValue(0);
  const savedTranslateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const savedTranslateY = useSharedValue(0);

  const singleTap = Gesture.Tap().onStart(() => {
    bgColor.value = withTiming(Math.ceil((bgColor.value + 1) % colors.length));
  });

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      scale.value = withSpring(Math.min(scale.value + 0.3, 2));
    });

  const longPress = Gesture.LongPress()
    .minDuration(250)
    .onStart(() => {
      rotate.value = withSpring(360);
    })
    .onEnd(() => {
      rotate.value = withSpring(0);
    });

  const panGesture = Gesture.Pan()
    .onUpdate(e => {
      translateX.value = e.translationX;
      translateY.value = e.translationY;
    })
    .onEnd(() => {
      translateX.value = withTiming(0);
      translateY.value = withTiming(0);
    });

  const AnimatedStyles = useAnimatedStyle(() => {
    const interpolatedColors = interpolateColor(
      bgColor.value,
      [0, 1, 2, 3, 4, 5],
      colors,
    );
    return {
      backgroundColor: interpolatedColors,
      transform: [
        {scale: scale.value},
        {rotate: `${rotate.value}deg`},
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.header}>Gesture PlayGround</Text>
        <GestureDetector
          gesture={Gesture.Simultaneous(
            singleTap,
            doubleTap,
            longPress,
            panGesture,
          )}>
          <Animated.View style={[styles.box, AnimatedStyles]}>
            <Text style={styles.boxText}>Pinch or Tap</Text>
          </Animated.View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
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
  box: {
    height: 150,
    width: 150,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GesturePlayGround;
