import React from 'react'
import { Text, Image, View } from 'react-native'
import { AntDesign, FontAwesome} from '@expo/vector-icons'
import { Audio } from 'expo-av'

import styles from './styles'

const song = {
  id: '5',
  uri: 'http://not-just-trash.s3-eu-west-1.amazonaws.com/WhatsApp+Audio+2020-09-22+at+14.20.25.mp4',
  imageUri: 'https://picsum.photos/200',
  title: 'Not Just Dev Beats',
  artist: 'Vadim',
}

const PlayerWidget = () => {
 const { imageUri, title, artist} = song
 const onPlaybackStatusUpdate = (status) => {
   console.log(status)
 }

 const playCurrentSong = async () => {
   const { sound } = Audio.Sound.createAsync(
    {uri: song.uri},
    {shouldPlay: true},
    onPlaybackStatusUpdate
    )
 }

 React.useEffect(() => {
  //  Play the song
  playCurrentSong()
 }, [])
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