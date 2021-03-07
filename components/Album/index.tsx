import React from 'react'
import { View, Image, Text } from 'react-native'
import { AlbumDefaultProps } from '../../types'

import styles from './styles'

export type AlbumProps = {
 album: AlbumDefaultProps
}

const Album = (props: AlbumProps) => {
  const {imageUri, artistsHeadline} = props.album

  return (
    <View style={styles.container}>
      <Image source={{uri: imageUri}} style={styles.image}/>
      <Text style={styles.text}>{artistsHeadline}</Text>
    </View>
  )
}

export default Album 