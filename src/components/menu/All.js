import React from 'react';
import {TouchableOpacity, Text, FlatList} from 'react-native';
import styles from '../../constants/menuStyles';
import {MenuContext} from '../../screens/MenuScreen';
import {useScrollToTop} from '@react-navigation/native';

export default function All({navigation}) {
  // scroll to top
  const ref = React.useRef(null);
  useScrollToTop(ref);

  const {quizData, pick} = React.useContext(MenuContext);

  return (
    <FlatList
      ref={ref}
      keyExtractor={(item) => item.id.toString()}
      data={quizData}
      style={[styles.container, {backgroundColor: '#303857'}]}
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
            <Text style={styles.itemTitleText}>{item.title}</Text>
            <Text style={styles.itemDescriptionText}>{item.description} </Text>
          </TouchableOpacity>
        );
      }}
      numColumns={1}
    />
  );
}
