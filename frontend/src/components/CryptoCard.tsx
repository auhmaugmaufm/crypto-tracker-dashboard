interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  high_24h: number;
  low_24h: number;
}

const CryptoCard = ({ coin }: { coin: Coin }) => {
  return (
    <li className="">
      <div className="flex flex-row items-center gap-3">
        <img src={coin.image} alt={coin.id} className="w-8 h-8 object-contain" />
        <h3 className="text-xl font-bold">
         {coin.name} ({coin.symbol.toUpperCase()})
        </h3>
      </div>
      <p>💰 Price: ${coin.current_price.toLocaleString()}</p>
      <p>📉 24h Change: {coin.price_change_percentage_24h.toFixed(2)}%</p>
      <p>📊 High (24h): ${coin.high_24h.toLocaleString()}</p>
      <p>📊 Low (24h): ${coin.low_24h.toLocaleString()}</p>
    </li>
  );
};

export default CryptoCard;
