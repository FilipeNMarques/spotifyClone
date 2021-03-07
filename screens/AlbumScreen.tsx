import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, StyleSheet } from 'react-native'
import SongListItem from '../components/SongListItem'

import { View } from '../components/Themed'
import albumDetails from '../data/AlbumDetails'
const AlbumScreen = () => {
  const route = useRoute()

  React.useEffect(() => {
    console.log(route)
  }, [])

  return (
    <View>
      <SongListItem song={albumDetails.songs[0]} />
    </View>
  )
}



export default AlbumScreen