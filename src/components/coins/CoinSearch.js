import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { TextInput, Platform, View, StyleSheet } from 'react-native'
import Colors from '../../res/colors'

const CoinSearch = ({ setCoins }) => {
  const [state, setState] = useState('')

  useEffect(() => {
    setCoins((coins) => ({
      ...coins,
      coinsFilter: coins.allCoins.filter((coin) => {
        return coin.name.toLowerCase().includes(state.toLowerCase())
      })
    }))
  }, [state])

  const handleChange = (value) => {
    setState(value)
  }

  return (
    <View>
      <TextInput
        style={[styles.textInput,
          Platform.OS === 'ios' ? styles.textInputIOS
            : styles.textInputAndroid
        ]}
        onChangeText={handleChange}
        value={state}
        placeholder="Search coin"
        placeholderTextColor="#fff"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: Colors.charade,
    paddingLeft: 16,
    color: '#fff'
  },
  textInputAndroid: {
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 2
  },
  textInputIOS: {
    margin: 8,
    borderRadius: 8
  }
})

CoinSearch.propTypes = {
  setCoins: PropTypes.func
}

export default CoinSearch
