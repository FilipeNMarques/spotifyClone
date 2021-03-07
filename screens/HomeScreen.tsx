import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import AlbumCategory from '../components/AlbumCategory';

import { View } from '../components/Themed';


const albumCategory = {
  id: '1',
  title: 'Chama na grande papai!',
  albums: [
    {
      id: '1',
      imageUri: 'https://picsum.photos/200',
      artistsHeadline: 'Barões da Pisadinha'
    },
    {
      id: '2',
      imageUri: 'https://picsum.photos/200',
      artistsHeadline: 'Tarcísio do Acordeon'
    },
    {
      id: '3',
      imageUri: 'https://picsum.photos/200',
      artistsHeadline: 'Saia Rodada'
    },
    {
      id: '4',
      imageUri: 'https://picsum.photos/200',
      artistsHeadline: 'Gaviões do forró'
    },
    {
      id: '5',
      imageUri: 'https://picsum.photos/200',
      artistsHeadline: 'Unha Pintada'
    },
  ]
}

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
     <AlbumCategory title={albumCategory.title} albums={albumCategory.albums} />
    </View>
  );
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
