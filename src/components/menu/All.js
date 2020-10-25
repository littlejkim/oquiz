import React, {useState} from 'react';
import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import styles from '../../constants/menuStyles';
import {MenuContext} from '../../screens/MenuScreen';

export default function All() {
  const {quizData,pick} = React.useContext(MenuContext);
  return (
    <FlatList
      extraData={quizData.all}
      keyExtractor={(item) => item.id.toString()}
      data={formatData(quizData.all)}
      style={styles.container}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            style={
              item.selected === true
                ? styles.itemSelected
                : styles.itemNotSelected
            }
            onPress={() => {
              console.log(item + index + 'selected')
              pick({
                "item": item,
                "index": index
              })
              
            }}>
            <Text style={styles.itemText}>
              {item.id}_{item.menu}
            </Text>
          </TouchableOpacity>
        );
      }}
      numColumns={1}
    />
  );
}

const formatData = (data) => {
  const numColumns = 2;
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
    numberOfElementsLastRow++;
  }
  return data;
};
