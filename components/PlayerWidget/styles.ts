import {StyleSheet} from 'react-native'

import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#131313',
    position: 'absolute',
    bottom: 70,
    width: '100%',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center'
  },
  imageCover: {
    width: 75,
    height: 75,
    marginRight: 8
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-around'
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10
  },
  artist: {
    color: 'lightgray',
    fontSize: 16
  }
})

export default styles