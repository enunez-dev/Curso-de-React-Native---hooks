export const getSymbolIcon = (name) => {
  if (name) {
    const symbol = name.toLowerCase().replace(' ', '-')
    return `https://c1.coinlore.com/img/25x25/${symbol}.png`
  }
}

export const getSections = (coin) => {
  return [
    {
      title: 'Market cap',
      data: [coin.market_cap_usd]
    },
    {
      title: 'Volume 24h',
      data: [coin.volume24]
    },
    {
      title: 'Change 24h',
      data: [coin.percent_change_24h]
    }
  ]
}

export const getMarkets = async (coinId) => {
  const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`
  const resp = await fetch(url)
  const data = await resp.json()
  return data
}
