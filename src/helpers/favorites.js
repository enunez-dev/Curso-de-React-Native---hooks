import { store, remove, get, getAllkeys, multiGet } from '../libs/storage'
import { Alert } from 'react-native'

export const addFavorite = async (coin) => {
  const coinJson = JSON.stringify(coin)
  const key = `favorite-${coin.id}`

  const stored = await store(key, coinJson)
  return stored
}

export const removeFavorite = async (coin, setState) => {
  Alert.alert('Remove favorite', 'Are you sure?', [
    {
      text: 'cancel',
      onPress: () => {},
      style: 'cancel'
    },
    {
      text: 'Remove',
      onPress: async () => {
        const key = `favorite-${coin.id}`

        await remove(key)
        setState((detail) => ({
          ...detail,
          isFavorite: false
        }))
      },
      style: 'destructive'
    }
  ])
}

export const getFavorite = async (coin) => {
  const key = `favorite-${coin.id}`

  const value = await get(key)

  return value
}

export const getFavorites = async () => {
  const allKeys = await getAllkeys()

  const keys = allKeys.filter(key => key.includes('favorite-'))

  const favs = await multiGet(keys)

  const favorites = favs.map(fav => JSON.parse(fav[1]))
  return favorites
}
