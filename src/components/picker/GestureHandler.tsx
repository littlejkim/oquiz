import React, {useRef, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useCode,
  set,
  divide,
  debug,
  sub,
  add,
  call,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {usePanGestureHandler} from  "react-native-redash/lib/module/v1";

import {ITEM_HEIGHT} from './Constants';
import {withDecay} from './AnimationHelpers';

interface GestureHandlerProps {
  value: Animated.Value<number>;
  max: number;
  defaultValue: number;
}

const GestureHandler = ({value, max, defaultValue}: GestureHandlerProps) => {
  const {gestureHandler, translation, velocity, state} = usePanGestureHandler();
  const snapPoints = new Array(max).fill(0).map((_, i) => i * -ITEM_HEIGHT);
  const translateY = withDecay({
    value: translation.y,
    velocity: velocity.y,
    state,
    snapPoints,
  });
  useCode(() => [set(value, add(translateY, ITEM_HEIGHT * 2))], []);

  return (
    <PanGestureHandler {...gestureHandler}>
      <Animated.View style={StyleSheet.absoluteFill} />
    </PanGestureHandler>
  );
};

export default GestureHandler;
