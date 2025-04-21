export const fetchPrices = async () => {
    const res = await fetch("api/prices")
    const data = await res.json()
    return data
}