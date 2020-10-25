import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContent: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    marginBottom: 20,
    marginStart: 20,
    marginEnd: 20,
  },
  footerMainButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6495ED',
    borderRadius: 50,
  },
  footerSubButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  footerMainText: {
    fontSize: 17,
    color: '#fff',
  },
  footerSubtext: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: 'grey',
  },
});
