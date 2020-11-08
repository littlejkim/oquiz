import {StyleSheet, Dimensions} from 'react-native';
import {
  PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_COLOR,
  SECONDARY_TEXT_COLOR,
} from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  item: {
    flex: 1,
  },
  itemCount: {
    color: '#ffe200',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  itemTitleText: {
    color: PRIMARY_TEXT_COLOR,
    fontSize: 23,
    fontWeight: 'bold',
  },
  itemDescriptionText: {
    color: PRIMARY_TEXT_COLOR,
    fontSize: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingLeft: 20,
  },
  tabContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingLeft: 20,
    height: 30,
    alignItems: 'center',
    marginTop: 10,
  },
});
