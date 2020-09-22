import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Pressable, StyleSheet, Image, Platform } from 'react-native'
import Colors from 'cryptoTraker/src/res/colors'

const CoinsItem = ({ item, onPress }) => {
  const getImgArrow = () => {
    if (item.percent_change_1h > 0) {
      return require('cryptoTraker/src/assets/arrow_up.png')
    } else {
      return require('cryptoTraker/src/assets/arrow_down.png')
    }
  }

  return (
    <Pressable onPress={onPress} style={style.container}>
      <View style={style.row}>
        <Text style={style.symbolText}>{item.symbol}</Text>
        <Text style={style.nameText}>{item.name}</Text>
        <Text style={style.priceText}>{item.price_usd}</Text>
      </View>
      <View style={style.row}>
        <Text style={style.percentText}>{item.percent_change_1h}</Text>
        <Image style={style.imgIcon} source={getImgArrow()} />
      </View>
    </Pressable>
  )
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
    marginLeft: Platform.OS === 'ios' ? 16 : 0
  },
  row: {
    flexDirection: 'row'
  },
  symbolText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 12
  },
  nameText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 16
  },
  percentText: {
    color: '#fff',
    fontSize: 12,
    marginRight: 8
  },
  priceText: {
    color: '#fff',
    fontSize: 14
  },
  imgIcon: {
    width: 20,
    height: 20
  }
})

CoinsItem.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func
}

export default CoinsItem
