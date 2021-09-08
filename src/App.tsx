import React, { useState } from "react";
import "./App.css";
import VehicleList from "./components/VehicleList";
import VehicleTelemetryInfo from "./components/VehicleTelemetryInfo";
import { Vehicle } from "./types";

function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>();

  return (
    <div className="App">
      <header>
        <p>Vehicle Tracking System</p>
        <VehicleList setSelectedVehicle={setSelectedVehicle} />
        <VehicleTelemetryInfo vehicleData={selectedVehicle} />
      </header>
    </div>
  );
}

export default App;
