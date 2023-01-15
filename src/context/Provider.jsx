import { useState } from "react";
import globalContext from "./globalContext";

function Provider ({ children }) {
  const [currentPage, setCurrentPage] = useState('');

  const context = {
    currentPage,
    setCurrentPage,
  }

  return (
    <globalContext.Provider value={ context } >
      { children }
    </globalContext.Provider>
  )
}

export default Provider;
