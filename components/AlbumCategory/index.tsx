import React from 'react'
import {View, Text, FlatList} from 'react-native'
import { AlbumDefaultProps } from '../../types'
import Album from '../Album'

import styles from './styles'

type AlbumCategoryProps = {
    id?: string
    title: string
    albums: AlbumDefaultProps[]
}
const AlbumCategory = (props: AlbumCategoryProps ) => {
  const { title, albums } = props
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <FlatList
        data={albums}
        renderItem={({ item }) => <Album album={item} /> }
        keyExtractor={( item ) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}

      />
    </View> 
  )
}

export default AlbumCategory