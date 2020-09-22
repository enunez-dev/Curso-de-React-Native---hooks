import { useEffect, useState } from 'react'
import { getMarkets } from '../helpers/coinDetail'
import { getFavorite } from '../helpers/favorites'

const useCoinsDetail = ({ coin }) => {
  const [state, setState] = useState({
    coin: coin,
    markets: null,
    isFavorite: false
  })

  useEffect(() => {
    getFavorite(coin).then(result => {
      if (result !== null) {
        setState((coinState) => ({ ...coinState, isFavorite: true }))
      }
    })
    getMarkets(coin.id).then(result => {
      setState((coinState) => ({ ...coinState, markets: result }))
    })
  }, [])

  return [state, setState]
}

export default useCoinsDetail
