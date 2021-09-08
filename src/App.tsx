import React from "react";
import "./App.css";
import VehicleList from "./components/VehicleList";
import VehicleTelemetryInfo from "./components/VehicleTelemetryInfo";

function App() {
  return (
    <div className="App">
      <header>
        <p>Vehicle Tracking System</p>
        <VehicleList />
        <VehicleTelemetryInfo id="52257927-39ef-485e-bc16-53e2dc3acb0c" />
      </header>
    </div>
  );
}

export default App;
