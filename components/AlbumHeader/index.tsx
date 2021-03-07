import React from 'react'
import {Text, View, FlatList, Image, TouchableOpacity } from 'react-native'

import { AlbumDefaultProps } from '../../types'
import styles from './styles'

export type AlbumHeaderProps = {
  album: AlbumDefaultProps
}

const AlbumHeader = (props: AlbumHeaderProps) => {
  const { album } = props

  return (
    <View style={styles.container}>
      <Image source={{uri: album.imageUri}} style={styles.imageCover}/>
      <Text style={styles.name}>{album.name}</Text>
      <View style={styles.creatorContainer}>
        <Text style={styles.by}>Por {album.by}</Text>
        <Text style={styles.numberOfLikes}>{album.numberOfLikes} Likes</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.playPouseButton}>
          <Text style={styles.btnLabel}>TOCAR</Text>
        </View>
      </TouchableOpacity>
    </View>
  )

}

export default AlbumHeader