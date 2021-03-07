import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: { 
    alignItems: 'center',
    padding: 20
  },
  imageCover: {
    width: 200,
    height: 200,
    margin: 25
  },
  name: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  creatorContainer: {
    flexDirection: 'row',
    margin: 10
  },
  by: {
    color: 'lightgray',
    margin: 5,
    fontSize: 16
  },
  numberOfLikes: {
    color: 'lightgray',
    margin: 5,
    fontSize: 16
  },
  playPouseButton: {
    backgroundColor: '#1DB954',
    height: 50,
    width: 180,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnLabel: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  }
})

export default styles