export const getListCoins = async () => {
  const url = 'https://api.coinlore.net/api/tickers/'
  const resp = await fetch(url)
  const data = await resp.json()

  return data
}
