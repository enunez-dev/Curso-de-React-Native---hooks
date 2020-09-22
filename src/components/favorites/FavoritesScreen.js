import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, FlatList } from 'react-native'
import FavoriresEmptyState from './FavoriresEmptyState'
import CoinsItem from '../coins/CoinsItem'
import useFavorites from '../../hooks/useFavorites'
import Colors from '../../res/colors'

const FavoritesScreen = ({ navigation }) => {
  const [state, getFavoritesUpdate] = useFavorites()

  navigation.addListener('focus', () => getFavoritesUpdate())

  const hanblePress = (coin) => {
    navigation.navigate('CoinDetail', { coin })
  }
  return (
    <View style={styles.container}>
      {state.length === 0 && <FavoriresEmptyState /> }
      {state.length > 0 &&
        <FlatList
          data={state}
          renderItem={({ item }) => {
            return (
              <CoinsItem
                item={item}
                onPress={() => hanblePress(item)}
              />
            )
          }}
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1
  }
})

FavoritesScreen.propTypes = {
  navigation: PropTypes.object
}

export default FavoritesScreen
