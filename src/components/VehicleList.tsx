import React from "react";
import useFetchVehicles from "../hooks/useFetchVehicles";
import { Vehicle } from "../types";

type VehicleListProps = {
  setSelectedVehicleId: Function;
};

const VehicleList = ({ setSelectedVehicleId }: VehicleListProps) => {
  const [vehicles, refreshVehicles]: [Vehicle[], () => Promise<void>] =
    useFetchVehicles();

  const handleClick = (e: React.SyntheticEvent) => {
    //@ts-ignore
    const selectedId = e.target.getAttribute("vehicleid");

    console.log("selected:", selectedId);

    setSelectedVehicleId(selectedId);
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
