import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  RefreshControl,
} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import styles from '../../constants/menuStyles';
import {PRIMARY_TEXT_COLOR} from '../../constants/colors';
import {getBestQuizzes} from '../../utils/GetQuizzes';
import {QuizContext} from '../../context/QuizContext';
import {wait} from '../../utils/otherFunctions';

export default function Best({navigation}) {
  const {best, setBest} = React.useContext(QuizContext);
  const [refreshing, setRefreshing] = React.useState(false);

  // pull to refresh
  const ref = React.useRef(null);
  useScrollToTop(ref);
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      getBestQuizzes(50).then((quiz) => {
        wait()
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
  }, [setBest]);

  return (
    <FlatList
      refreshControl={
        <RefreshControl
          tintColor={PRIMARY_TEXT_COLOR}
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
            <View style={styles.itemContainer}>
              <View
                style={{
                  flex: 0.1,
                  alignSelf: 'auto',
                }}>
                <Text style={styles.itemCount}>{index + 1}</Text>
              </View>
              <View style={styles.itemDetails}>
                <Text style={styles.itemTitleText}>{item.title}</Text>
                <Text style={styles.itemDescriptionText}>
                  {item.description}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
      numColumns={1}
    />
  );
}
