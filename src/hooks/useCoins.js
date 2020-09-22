import { useState, useEffect } from 'react'
import { getListCoins } from '../helpers/coins'

const useCoins = () => {
  const [state, setState] = useState({
    allCoins: [],
    coinsFilter: [],
    loading: false
  })

  useEffect(() => {
    try {
      setState({ ...state, loading: true })
      getListCoins().then((result) => {
        setState({
          allCoins: result.data,
          coinsFilter: result.data,
          loading: false
        })
      })
    } catch (error) {
      setState({ ...state, loading: false })
    }
  }, [])

  return [state, setState]
}

export default useCoins
