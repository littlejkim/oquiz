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
import {getRecentQuizzes, refreshRecentQuizzes} from '../../utils/GetQuizzes';
import {QuizContext} from '../../context/QuizContext';
import {wait} from '../../utils/otherFunctions';

export default function Recent({navigation}) {
  const {
    recent,
    setRecent,
    firstDoc,
    lastDoc,
    setFirstDoc,
    setLastDoc,
  } = React.useContext(QuizContext);

  const [refreshing, setRefreshing] = React.useState(false);

  const loadMore = () => {
    console.log('loading more data');
    try {
      getRecentQuizzes(firstDoc, recent.length).then((quiz) => {
        if (firstDoc.id !== quiz.firstDoc.id) {
          console.log(
            'firstDoc: ' +
              firstDoc.data().title +
              ' -> ' +
              quiz.firstDoc.data().title,
          );
          setFirstDoc(quiz.firstDoc);
        } else {
          console.log('firstDoc: ' + quiz.firstDoc.data().title);
        }

        if (lastDoc.id !== quiz.lastDoc.id) {
          console.log(
            'lastDoc: ' +
              lastDoc.data().title +
              ' -> ' +
              quiz.lastDoc.data().title,
          );
          setLastDoc(quiz.lastDoc);
        } else {
          console.log('lastDoc: ' + quiz.lastDoc.data().title);
        }
        console.log('new list size: ' + quiz.list.length);
        setRecent(quiz.list);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // pull to refresh
  const ref = React.useRef(null);
  useScrollToTop(ref);
  const onRefresh = React.useCallback(async () => {
    console.log('refresh lastDoc: ' + lastDoc.data().title);
    setRefreshing(true);
    try {
      refreshRecentQuizzes(lastDoc).then((quiz) => {
        wait()
          .then(() => setRefreshing(false))
          .then(() => {
            if (quiz.list.length != 0) {
              if (firstDoc.id !== quiz.firstDoc.id) {
                console.log(
                  'firstDoc: ' +
                    firstDoc.data().title +
                    ' -> ' +
                    quiz.firstDoc.data().title,
                );
                setFirstDoc(quiz.firstDoc);
              } else {
                console.log('firstDoc: ' + quiz.firstDoc.data().title);
              }

              if (lastDoc.id !== quiz.lastDoc.id) {
                console.log(
                  'lastDoc: ' +
                    lastDoc.data().title +
                    ' -> ' +
                    quiz.lastDoc.data().title,
                );
                setLastDoc(quiz.lastDoc);
              } else {
                console.log('lastDoc: ' + quiz.lastDoc.data().title);
              }
              console.log('new list size: ' + quiz.list.length);
              setRecent(quiz.list);
            }
          });
      });
    } catch (error) {
      console.error(error);
    }
  }, [firstDoc, lastDoc, setRecent, setFirstDoc, setLastDoc]);

  return (
    <FlatList
      refreshControl={
        <RefreshControl
          tintColor="grey"
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      ref={ref}
      keyExtractor={(item) => item.id.toString()}
      data={recent}
      style={styles.container}
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
