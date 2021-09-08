import React, { useState, useEffect } from "react";
import { Vehicle } from "../types";

const VEHICLE_LIST_API = process.env.REACT_APP_VEHICLES_API ?? "";

const useFetchVehicles = (): [Vehicle[], () => Promise<void>] => {
  const [vehicleList, setVehicleList] = useState<Vehicle[]>([]);

  async function getVehicles(): Promise<void> {
    try {
      const response = await fetch(VEHICLE_LIST_API);
      const data: Vehicle[] = await response.json();
      if (data) {
        setVehicleList(data);
      }
    } catch (e) {
      console.error(
        `An error occurred while fetching vehicle list data: ${
          (e as Error).message
        }`
      );
    }
  }

  useEffect(() => {
    getVehicles();
  }, []);

  return [vehicleList, getVehicles];
};

export default useFetchVehicles;
