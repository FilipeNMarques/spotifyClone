import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Album from '../components/Album';

const album = {
  id: '1',
  imageUri: 'https://picsum.photos/200',
  artistsHeadline: 'Barões da Pisadinha, Zé Vaqueiro e Gaviões do Forró'
}

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
     <Album album={album} />
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
