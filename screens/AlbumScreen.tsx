import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'
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
      <FlatList
        data={albumDetails.songs}
        renderItem={({item}) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}



export default AlbumScreen