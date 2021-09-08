import React, { useState } from "react";
import "./App.scss";
import VehicleList from "./components/VehicleList";
import VehicleTelemetryInfo from "./components/VehicleTelemetryInfo";
import { Vehicle } from "./types";

function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>();

  return (
    <div className="App">
      <header>
        <h2>Vehicle Tracking System</h2>
      </header>
      <div className="container--flex">
        <VehicleList setSelectedVehicle={setSelectedVehicle} />
        <VehicleTelemetryInfo vehicleData={selectedVehicle} />
      </div>
    </div>
  );
}

export default App;
