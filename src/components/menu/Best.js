import React from 'react';
import {TouchableOpacity, Text, FlatList} from 'react-native';
import styles from '../../constants/menuStyles';
import {MenuContext} from '../../screens/MenuScreen';

export default function All() {
  const {quizData, pick} = React.useContext(MenuContext);
  return (
    <FlatList
      extraData={quizData.best}
      keyExtractor={(item) => item.id.toString()}
      data={formatData(quizData.best)}
      style={styles.container}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            style={styles.item}
            activeOpacity={0.7}
            onPress={() => {
              pick({
                item: item,
                index: index,
              });
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
