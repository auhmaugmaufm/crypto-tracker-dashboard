export async function GET() {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1")
    const data = await res.json()
    return Response.json(data)
  }