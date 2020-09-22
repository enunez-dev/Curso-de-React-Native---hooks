import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from 'react-native'
import CoinsItem from './CoinsItem'
import useCoins from '../../hooks/useCoins'
import CoinSearch from './CoinSearch'
import Colors from 'cryptoTraker/src/res/colors'

const CoinsScreen = ({ navigation }) => {
  const [{ coinsFilter, loading }, setState] = useCoins()

  const hanblePress = (coin) => {
    navigation.navigate('CoinDetail', { coin })
  }

  return (
    <View style={style.container}>
      <CoinSearch setCoins={setState} />
      {loading ? (
        <ActivityIndicator color="#fff" size="large" style={style.loader} />
      ) : (
        <FlatList
          data={coinsFilter}
          renderItem={({ item }) =>
            <CoinsItem
              item={item}
              onPress={() => hanblePress(item)}
            />}
        />
      )}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16
  },
  btnText: {
    color: '#fff',
    textAlign: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 18,
    padding: 16,
    textAlign: 'center'
  },
  loader: {
    flex: 1
  }
})

CoinsScreen.propTypes = {
  navigation: PropTypes.object
}

export default CoinsScreen
