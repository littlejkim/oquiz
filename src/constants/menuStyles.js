import {StyleSheet} from 'react-native';
import {
  PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_COLOR,
  SECONDARY_TEXT_COLOR,
  TERTIARY_COLOR,
} from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 13,
    paddingRight: 10,
    marginBottom: 15,
    marginTop: 15,
  },
  item: {
    flex: 1,
    backgroundColor: SECONDARY_COLOR,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 13,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 7,
    marginBottom: 7,
  },
  itemCount: {
    color: TERTIARY_COLOR,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  itemDetails: {
    flex: 1,
    paddingLeft: 13,
  },
  itemTitleText: {
    color: SECONDARY_TEXT_COLOR,
    fontSize: 25,
    fontWeight: 'bold',
  },
  itemDescriptionText: {
    color: SECONDARY_TEXT_COLOR,
    fontSize: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    justifyContent: 'flex-start',
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
