import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  itemSelected: {
    backgroundColor: '#023e71',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 3,
    height: Dimensions.get('window').width / 2 - 10, // approximate a square
  },
  itemNotSelected: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 3,
    height: Dimensions.get('window').width / 2 - 10, // approximate a square
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
