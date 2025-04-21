interface Coin {
    id: string;
    symbol: string;
    current_price: number;
    high_24h: number;
    low_24h: number;
    market_cap_rank: number;
}

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Crypto Tracker',
        },
    },
};


export function PriceChart({ coins }: { coins: Coin[] }) {
    const colors = ['orange', 'grey', 'green', 'black', 'yellow'];

    const data = {
        labels: ['Low 24h', 'Current Price', 'High 24h'],
        datasets: coins.map((coin, index) => ({
            label: `${coin.symbol.toUpperCase()}`,
            data: [coin.low_24h, coin.current_price, coin.high_24h],
            borderColor: colors[coin.market_cap_rank - 1],
            backgroundColor: colors[coin.market_cap_rank - 1],
            tension: 0.4,
            fill: true,
        })),
    };

    return <Line options={options} data={data} />;
}
