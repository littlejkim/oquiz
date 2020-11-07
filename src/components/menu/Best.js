import React from 'react';
import {TouchableOpacity, Text, FlatList, RefreshControl} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import styles from '../../constants/menuStyles';
import {getBestQuizzes} from '../../utils/GetQuizzes';
import {QuizContext} from '../../context/QuizContext';
import {wait} from '../../utils/otherFunctions';

export default function Best({navigation}) {
  const {best, setBest} = React.useContext(QuizContext);
  const [refreshing, setRefreshing] = React.useState(false);

  // scroll to top
  const ref = React.useRef(null);
  useScrollToTop(ref);

  // pull to refresh
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      getBestQuizzes(50).then((quiz) => {
        wait(1300)
          .then(() => setRefreshing(false))
          .then(() => {
            if (quiz.list.length != 0) {
              setBest(quiz);
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
      data={best}
      style={styles.container}
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
