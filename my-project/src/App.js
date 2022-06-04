import SymbolList from "./SymbolList";
import AsksAndBids from "./AsksAndBids";
import { useState } from "react";
import binance from "./Images/binance.png"
function App() {
  const [selectedSymbol,setSymbol]=useState("ENJETH");
  const handleSymbol=(e)=>{
    console.log(e.symbol)
    setSymbol(e.symbol)
  }
  return (
    <>
      <div className="flex justify-between flex-wrap h-full w-full" style={{ backgroundImage: `url(${binance})`, height:'100vh', width:'100vw' }}>
        <AsksAndBids symbol={selectedSymbol}/>
        <SymbolList handleSymbol={handleSymbol}/>
       
      </div>
      
    </>
  );
}

export default App;
