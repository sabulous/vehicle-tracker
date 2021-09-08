import React from "react";
import useFetchVehicles from "../hooks/useFetchVehicles";
import { Vehicle } from "../types";

type VehicleListProps = {
  setSelectedVehicle: Function;
};

const VEHICLE_LIST_API = process.env.REACT_APP_VEHICLES_API ?? "";

const VehicleList = ({ setSelectedVehicle }: VehicleListProps) => {
  const [vehicles, refreshVehicles]: [Vehicle[], () => Promise<void>] =
    useFetchVehicles();

  const getVehicleDetailsById = async (id: string) => {
    const response = await fetch(`${VEHICLE_LIST_API}/${id}`);
    const data: Vehicle = await response.json();
    setSelectedVehicle(data);
  };

  const handleClick = (e: React.SyntheticEvent) => {
    //@ts-ignore
    const selectedId = e.target.getAttribute("vehicleid");

    console.log("selected:", selectedId);
    getVehicleDetailsById(selectedId);
  };

  return (
    <div>
      {vehicles &&
        vehicles.map((v, idx) => (
          //@ts-ignore
          <div key={idx} onClick={handleClick} vehicleid={v.id}>
            {v.name} {v.color} {v.plate_number}
          </div>
        ))}
    </div>
  );
};

export default VehicleList;
