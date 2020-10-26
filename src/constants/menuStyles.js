import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  item: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    flex: 1,
    margin: 4,
    height: Dimensions.get('window').width / 2 - 50,
  },

  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
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
