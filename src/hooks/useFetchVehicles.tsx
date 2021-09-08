import React, { useState, useEffect } from "react";
import { Vehicle } from "../types";

const VEHICLE_LIST_API = "https://vehicle-api-test.herokuapp.com/api/vehicles";

const useFetchVehicles = (): [Vehicle[], () => Promise<void>] => {
  const [vehicleList, setVehicleList] = useState<Vehicle[]>([]);

  async function getVehicles(): Promise<void> {
    const response = await fetch(VEHICLE_LIST_API);
    const data: Vehicle[] = await response.json();
    console.log(data);
    setVehicleList(data);
  }

  useEffect(() => {
    getVehicles();
  }, []);

  return [vehicleList, getVehicles];
};

export default useFetchVehicles;
