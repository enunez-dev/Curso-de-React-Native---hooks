import { useEffect, useState } from 'react'
import { getFavorites } from '../helpers/favorites'

const useFavorites = () => {
  const [state, setstate] = useState([])

  const getFavoritesUpdate = () => {
    getFavorites().then(result => {
      setstate(result)
    })
  }

  useEffect(() => {
    getFavoritesUpdate()
  }, [])

  return [state, getFavoritesUpdate]
}

export default useFavorites
