import { useEffect } from "react"
import { useState } from "react"

function AsksAndBids({symbol}){
    // https://api.binance.com/api/v3/depth?symbol=ENJETH&limit=10
    const [asks,setAsks]=useState([[]])
    const [bids,setBids]=useState([[]])
    let url=`https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=10`;
    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((json) =>{console.log(json); setAsks(json.asks); setBids(json.bids)})
        console.log(asks)
        console.log(bids)
    },[asks,bids,url])
    
    return(
        <>
            
            <div className='h-96 mt-60 space-x-8 opacity-80  flex text-white bg-black'>
            <div>
            <div className="text-center font-bold">Asks</div>
            { asks.map((ask,idx)=>{
                return(
                    <div className="flex space-x-2 justify-between" key={idx}>
                        <div className='mx-auto mb-2'>{ask[0]}</div>
                        <div className='mx-auto mb-2'>{ask[1]}</div>
                     </div>
                     )
                })
            }
            </div>
            <div>
            <div className="text-center font-bold">Bids</div>
            {
                bids.map((bid,idx)=>{
                return(
                    <div className="flex space-x-3 justify-between" key={idx}>
                        <div className='mx-auto  mb-2'>{bid[0]}</div>
                        <div className='mx-auto  mb-2'>{bid[1]}</div>
                     </div>
                     )
                })
            }
            </div>
            </div>
        </>
    )
}

export default AsksAndBids