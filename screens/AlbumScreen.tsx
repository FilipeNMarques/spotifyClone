import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, StyleSheet } from 'react-native'

import { View } from '../components/Themed'

const album = {
  id: '11',
  name: 'A grande vida',
  by: 'Spotify',
  numberOfLikes: 156,
  imageUri: 'https://picsum.photos/200',
  artistsHeadline: 'Ale de Maria',
  songs: [
    {
      id: '1',
      imageUri: 'https://picsum.photos/200',
      title: 'Mamãe Maria',
      artistsHeadline: 'Ale de Maria',
    },
    {
      id: '2',
      imageUri: 'https://picsum.photos/200',
      title: 'Luz da Aldeia',
      artistsHeadline: 'Ale de Maria',
    },
    {
      id: '3',
      imageUri: 'https://picsum.photos/200',
      title: 'Raiou',
      artistsHeadline: 'Ale de Maria',
    },
    {
      id: '4',
      imageUri: 'https://picsum.photos/200',
      title: 'Pachamama',
      artistsHeadline: 'Ale de Maria',
    },
    {
      id: '5',
      imageUri: 'https://picsum.photos/200',
      title: 'Reza do vento',
      artistsHeadline: 'Ale de Maria',
    },
  ]

}

const AlbumScreen = () => {
  const route = useRoute()

  React.useEffect(() => {
    console.log(route)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>
        Hello from album screem
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});


export default AlbumScreen