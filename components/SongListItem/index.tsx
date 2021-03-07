import React from 'react'
import { Text, Image, View } from 'react-native'
import { SongDefaultProps } from '../../types'
import styles from './styles'

export type SonglistItemProps = {
  song: SongDefaultProps
} 

const SongListItem = (props: SonglistItemProps) => {
 const {title, imageUri, artist} = props.song

  return (
    <View style={styles.container}>
      <Image source={{uri: imageUri}} style={styles.imageCover}/>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>
    </View>
  )
}
export default SongListItem