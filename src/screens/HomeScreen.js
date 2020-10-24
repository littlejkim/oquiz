import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Home() {
  return (
    <View style={container.container}>
      <Text>di</Text>
    </View>
  );
}

const container = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
