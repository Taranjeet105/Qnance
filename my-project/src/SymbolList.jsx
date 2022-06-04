import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function SymbolList({handleSymbol}){
    const [symbols,setSymbols]=useState([])
    let url="https://api.binance.com/api/v3/ticker/price"
    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((json) =>{setSymbols(json)})
    },[])
    
    return(
        <>
            
            <div className='h-80 w-56 mt-64 bg-black opacity-60 text-white overflow-scroll  '>
            <div className='mx-auto w-44 mb-2 text-center font-bold'>Select Symbol</div>
            { symbols.map(({symbol},idx)=>{
                return <div className='mx-auto w-10 mb-2' key={idx} onClick={()=>{handleSymbol(symbols[idx])}}>{symbol}</div>
                })}
            </div>
        </>
    )
        
    
}

export default SymbolList