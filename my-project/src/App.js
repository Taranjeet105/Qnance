import SymbolList from "./SymbolList";
import AsksAndBids from "./AsksAndBids";
import { useState } from "react";
function App() {
  const [selectedSymbol,setSymbol]=useState("ENJETH");
  const handleSymbol=(e)=>{
    console.log(e.symbol)
    setSymbol(e.symbol)
  }
  return (
    <>
        
        <SymbolList handleSymbol={handleSymbol} selectedSymbol={selectedSymbol}/>
        <AsksAndBids symbol={selectedSymbol}/>
      
    </>
  );
}

export default App;
