import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { AlbumDefaultProps } from '../../types'

import styles from './styles'

export type AlbumProps = {
 album: AlbumDefaultProps
}

const Album = (props: AlbumProps) => {
  const {imageUri, artistsHeadline} = props.album
  const navigation = useNavigation()
  
  const moveToAlbum = () => {
    navigation.navigate('AlbumScreen', {
      id: props.album.id
    })
  }

  return (
    <TouchableOpacity onPress={moveToAlbum}>
      <View style={styles.container}>
        <Image source={{uri: imageUri}} style={styles.image}/>
        <Text style={styles.text}>{artistsHeadline}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Album 