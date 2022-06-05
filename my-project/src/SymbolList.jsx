import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from "./styles/scrollBar.css"
import downArrow from '../src/Images/downarrow.svg'
function SymbolList({handleSymbol,selectedSymbol}){
    const [isDropDownActive,setDropDown]=useState(false);
    const [symbols,setSymbols]=useState([])
    const handleDropDown=()=>{
        setDropDown(!isDropDownActive);
    }
    let url="https://api.binance.com/api/v3/ticker/price"
    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((json) =>{setSymbols(json)})
    },[])
   
    
    return(
        <>
            
            <div style={style} className={`${isDropDownActive&&"h-52"} pt-8  mx-auto border-white bg-black overflow-x-hidden  overflow-scroll`}>
            <div onClick={handleDropDown} className='mx-auto w-full mb-2 flex justify-center space-x-2 text-white text-center font-bold'><div>{selectedSymbol} </div><img src={`${downArrow}`}/></div>
            
            {isDropDownActive&&symbols.map(({symbol},idx)=>{
                return <div className='mx-auto w-full mb-2 text-white text-center pr-3 opacity-75 hover:opacity-100' key={idx} onClick={()=>{handleSymbol(symbols[idx]); handleDropDown() }}>{symbol}</div>
                })}
            </div>
        </>
    )
        
    
}

export default SymbolList