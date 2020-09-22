/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FavoriresEmptyState = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You don't have favorite  yettttttt</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center'
  }
})

export default FavoriresEmptyState
