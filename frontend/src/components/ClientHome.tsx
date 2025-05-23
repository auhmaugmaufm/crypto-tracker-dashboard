"use client"

import { useEffect, useState } from "react";

import CryptoCard from "./CryptoCard";
import { PriceChart } from "./PriceChart";
import { showLoader, hideLoader } from './Preloader'

const ClientHome = () => {
    const [data, setData] = useState<any>([])

    useEffect(() => {
        const load = async () => {
            console.log("fetch data: ")
            showLoader()
            const res = await fetch("/api/prices")
            const rawData = await res.json()
            setData(rawData)
            // console.log(rawData)
            console.log(data);
            hideLoader()
        }
        load()
    }, [])


    return (
        <div className="flex flex-col h-screen rounded-4xl justify-center items-center ">
            <div className="flex justify-center">
                {data.length > 0 ? (
                    <ul className="flex flex-wrap gap-5 p-5 ">
                        {data.map((coin: any) => (
                            <CryptoCard coin={coin} key={coin.id} />
                        ))}
                    </ul>
                ) : (
                    <div>
                    
                    </div>
                )}
            </div>
            <div className="flex justify-center p-8">
                <div className="w-200 h-auto">
                    {data.length > 0 ? (
                        <PriceChart coins={data} />

                    ) : (
                        <div>

                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}
export default ClientHome