import React, { useState } from "react";
import "./App.css";
import VehicleList from "./components/VehicleList";
import VehicleTelemetryInfo from "./components/VehicleTelemetryInfo";

function App() {
  const [selectedVehicleId, setSelectedVehicleId] = useState("");
  return (
    <div className="App">
      <header>
        <p>Vehicle Tracking System</p>
        <VehicleList setSelectedVehicleId={setSelectedVehicleId} />
        <VehicleTelemetryInfo id={selectedVehicleId} />
      </header>
    </div>
  );
}

export default App;
