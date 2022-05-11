import React, { useState } from "react";
import Home from "./Home";
import NavMenu from "./NavMenu";

import { Switch, Route, Routes } from "react-router-dom";

function App() {
  const [currentCompo, setCurrentCompo] = useState(<Home />);
  return (
    <>
      <NavMenu clicked={(e) => setCurrentCompo(e)} />

      {currentCompo}
    </>
  );
}

export default App;
