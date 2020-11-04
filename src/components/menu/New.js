import React from 'react';
import {TouchableOpacity, Text, FlatList, RefreshControl} from 'react-native';
import styles from '../../constants/menuStyles';
import {MenuContext} from '../../screens/MenuScreen';
import {useScrollToTop} from '@react-navigation/native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import {getRecentQuizzes, refreshRecentQuizzes} from '../../utils/GetQuizzes';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default function New({navigation}) {
  const {quizData, pick} = React.useContext(MenuContext);

  const [refreshing, setRefreshing] = React.useState(false);
  const [quizListData, setQuizListData] = React.useState(quizData.recent);
  const [firstDoc, setFirstDoc] = React.useState(quizData.firstDoc['Recent']);
  const [lastDoc, setLastDoc] = React.useState(quizData.lastDoc['Recent']);

  const loadMore = () => {
    try {
      getRecentQuizzes(lastDoc, 5).then((quiz) => {
        setLastDoc(quiz.last);
        console.log(quiz.last.data().title);
        setQuizListData(quizListData.concat(quiz.list));
      });
    } catch (error) {
      console.log('error');
    }
  };

  // scroll to top
  const ref = React.useRef(null);
  useScrollToTop(ref);

  // pull to refresh
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      refreshRecentQuizzes(lastDoc).then((quiz) => {
        wait(1300)
          .then(() => setRefreshing(false))
          .then(() => {
            if (quiz.list.length != 0) {
              setFirstDoc(quiz.first);
              setQuizListData(quiz.list);
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
      onEndReachedThreshold={0.01}
      onEndReached={(info) => {
        loadMore();
      }}
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
