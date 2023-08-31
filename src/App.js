import React from "react";
import IceCreamView from "./features/icecream/IceCreamView";
import CakeView from "./features/cake/CakeView";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
    </div>
  );
}

export default App;
