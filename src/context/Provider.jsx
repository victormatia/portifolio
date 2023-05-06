import { useState } from "react";
import globalContext from "./globalContext";

function Provider ({ children }) {
  const [currentPage, setCurrentPage] = useState('');
  const [showBGHeader, setShowBGHeader] = useState(false);

  const context = {
    currentPage,setCurrentPage,
    showBGHeader, setShowBGHeader
  }

  return (
    <globalContext.Provider value={ context } >
      { children }
    </globalContext.Provider>
  )
}

export default Provider;
