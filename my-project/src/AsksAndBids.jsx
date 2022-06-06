import { useEffect } from "react"
import { useState } from "react"

function AsksAndBids({symbol}){
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
            
            <div className='h-screen  mx-auto md:space-x-2 flex flex-wrap overflow-scroll justify-center text-white bg-black'>
            <div className="h-96 border rounded-xl px-8 pt-2">
            <div className="text-center text-xl  font-bold">Bids</div>
            {
                bids.map((bid,idx)=>{
                return(
                    <div className="flex space-x-3 text-blue-700 justify-between" key={idx}>
                        <div className=' font-medium mb-2'>{bid[1]}</div>
                        <div className=' font-medium mb-2'>{bid[0]}</div>
                     </div>
                     )
                })
            }

            </div>

            <div  className="h-96 border rounded-xl pt-2 px-8">
            <div className="text-center text-xl  font-bold">Asks</div>
            { asks.map((ask,idx)=>{
                return(
                    <div className="flex space-x-3 text-red-700 justify-between" key={idx}>

                        <div className=' font-medium mb-2'>{ask[0]}</div>
                        <div className=' font-medium mb-2'>{ask[1]}</div>
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