import React from 'react';
import {TouchableOpacity, Text, FlatList, RefreshControl} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import styles from '../../constants/menuStyles';
import {MenuContext} from '../../screens/MenuScreen';
import {useScrollToTop} from '@react-navigation/native';
import {
  getRecommendedQuizzes,
} from '../../utils/GetQuizzes';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default function All({navigation}) {
  const {quizData, pick} = React.useContext(MenuContext);

  const [refreshing, setRefreshing] = React.useState(false);
  const [quizListData, setQuizListData] = React.useState(quizData.recommended);



  // scroll to top
  const ref = React.useRef(null);
  useScrollToTop(ref);

  // pull to refresh
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      getRecommendedQuizzes().then((quiz) => {
        wait(800)
          .then(() => setRefreshing(false))
          .then(() => {
            if (quiz.list.length != 0) {
              setQuizListData(quiz);
            }
          });
      });
    } catch (error) {
      console.error(error);
    }
  }, [refreshing]);

  return (
    <FlatList
      refreshControl={
        <RefreshControl
          progressBackgroundColor="white"
          tintColor="white"
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      ref={ref}
      keyExtractor={(item) => item.id.toString()}
      data={quizListData}
      style={[styles.container, {backgroundColor: '#303857'}]}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            style={styles.item}
            activeOpacity={0.7}
            onPress={() => {
              ReactNativeHapticFeedback.trigger('impactLight', {
                enableVibrateFallback: true,
                ignoreAndroidSystemSettings: false,
              });
              navigation.navigate('Initial', {item: item});
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
