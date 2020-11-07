import React from 'react';
import {TouchableOpacity, Text, FlatList, RefreshControl} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {useScrollToTop} from '@react-navigation/native';

import styles from '../../constants/menuStyles';
import {getRecommendedQuizzes} from '../../utils/GetQuizzes';
import {QuizContext} from '../../context/QuizContext';
import {wait} from '../../utils/otherFunctions';

export default function Recommended({navigation}) {
  const {recommended, setRecommended} = React.useContext(QuizContext);
  const [refreshing, setRefreshing] = React.useState(false);

  // pull to refresh
  const ref = React.useRef(null);
  useScrollToTop(ref);
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      getRecommendedQuizzes().then((quiz) => {
        wait(800)
          .then(() => setRefreshing(false))
          .then(() => {
            if (quiz.length != 0) {
              setRecommended(quiz);
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
      data={recommended}
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
