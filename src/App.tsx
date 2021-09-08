import React from "react";
import "./App.css";
import VehicleList from "./components/VehicleList";

function App() {
  return (
    <div className="App">
      <header>
        <p>Vehicle Tracking System</p>
        <VehicleList />
      </header>
    </div>
  );
}

export default App;
