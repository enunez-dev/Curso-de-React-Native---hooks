import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Pressable, Image, FlatList, StyleSheet, SectionList } from 'react-native'
import useCoinsDetail from '../../hooks/useCoinsDetail'
import { getSymbolIcon, getSections } from '../../helpers/coinDetail'
import { addFavorite, removeFavorite } from '../../helpers/favorites'
import Colors from '../../res/colors'
import CoinMarkeItem from './CoinMarkeItem'

const CoinDetailScreen = ({ route, navigation }) => {
  const [{ coin, markets, isFavorite }, setState] = useCoinsDetail(route.params)

  useEffect(() => {
    navigation.setOptions({ title: coin.symbol })
  }, [])

  const toogleFavorite = async () => {
    if (isFavorite) {
      removeFavorite(coin, setState)
    } else {
      setState((detail) => ({
        ...detail,
        isFavorite: addFavorite(coin)
      }))
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <View style={styles.row}>
          <Image style={styles.iconImg} source={{ uri: getSymbolIcon(coin.name) }} />
          <Text style={styles.titleText}>{coin.name}</Text>
        </View>
        <Pressable
          onPress={toogleFavorite}
          style={[
            styles.btnFavorite,
            isFavorite ? styles.btnFavoriteRemove : styles.btnFavoriteAdd
          ]}>
          <Text style={styles.btnFavoriteText}>
            {isFavorite ? 'Remove Favorite' : 'Add favorite'}
          </Text>
        </Pressable>
      </View>
      <SectionList
        style={styles.section}
        sections={getSections(coin)}
        keyExtractor={item => item}
        renderSectionHeader={({ section }) =>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionText}>{section.title}</Text>
          </View>
        }
        renderItem={({ item }) =>
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        }
      />

      <Text style={styles.marketTitle}>Markets</Text>

      <FlatList
        style={styles.list}
        horizontal={true}
        data={markets}
        renderItem={({ item }) => <CoinMarkeItem item={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade
  },
  row: {
    flexDirection: 'row'
  },
  subHeader: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconImg: {
    width: 25,
    height: 25
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8
  },
  section: {
    maxHeight: 220
  },
  list: {
    maxHeight: 100,
    paddingLeft: 16
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 8
  },
  sectionItem: {
    padding: 8
  },
  itemText: {
    color: '#fff',
    fontSize: 14
  },
  sectionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  },
  marketTitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 16,
    marginLeft: 16,
    fontWeight: 'bold'
  },
  btnFavorite: {
    padding: 8,
    borderRadius: 8
  },
  btnFavoriteText: {
    color: '#fff'
  },
  btnFavoriteAdd: {
    backgroundColor: Colors.picton
  },
  btnFavoriteRemove: {
    backgroundColor: Colors.carmine
  }
})

CoinDetailScreen.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object
}

export default CoinDetailScreen
