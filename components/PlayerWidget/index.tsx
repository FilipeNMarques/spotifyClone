import React from 'react'
import { Text, Image, View } from 'react-native'
import { AntDesign, FontAwesome} from '@expo/vector-icons'
import styles from './styles'

const song = {
  id: '5',
  imageUri: 'https://picsum.photos/200',
  title: 'Reza do vento',
  artist: 'Ale de Maria',
}

const PlayerWidget = () => {
 const { imageUri, title, artist} = song
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUri}} style={styles.imageCover}/>
        <View style={styles.rightContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.artist}>{artist}</Text>
          </View>
          <View style={styles.actionContainer}>
            <AntDesign name="hearto" size={24} color="white" />
            <FontAwesome name="play" size={24} color="white" />
          </View>
        </View>
    </View>
  )
}
export default PlayerWidget