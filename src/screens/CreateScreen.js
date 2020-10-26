import React from 'react';
import {TouchableOpacity, Text, FlatList, View} from 'react-native';
import menuStyle from '../constants/menuStyles';
import styles from '../constants/styles';
import {quizTypes} from '../constants/data';

export default function CreateScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <FlatList
          extraData={quizTypes}
          keyExtractor={(item) => item.id.toString()}
          data={quizTypes}
          bounces={false}
          style={menuStyle.container}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={menuStyle.item}
                activeOpacity={0.7}
                onPress={() => {
                  console.log(item.quizType + ' was selected');
                }}>
                <Text style={menuStyle.itemText}>{item.quizType}</Text>
              </TouchableOpacity>
            );
          }}
          numColumns={1}
        />
      </View>
    </View>
  );
}
