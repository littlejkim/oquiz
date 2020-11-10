import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, PRIMARY_TEXT_COLOR, TERTIARY_COLOR} from './colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  mainContent: {
    flex: 5,
    backgroundColor: PRIMARY_COLOR,
  },
  footer: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    marginBottom: 20,
    marginStart: 20,
    marginEnd: 20,
  },
  footerMainButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: TERTIARY_COLOR,
    borderRadius: 50,
  },
  footerSubButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  footerMainText: {
    fontSize: 18,
    color: 'white',
  },
  footerSubtext: {
    fontSize: 17,
    textDecorationLine: 'underline',
    color: PRIMARY_TEXT_COLOR,
  },
});
