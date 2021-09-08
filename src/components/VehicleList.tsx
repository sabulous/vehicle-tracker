import React, { useState, useCallback } from "react";
import useFetchVehicles from "../hooks/useFetchVehicles";
import { Vehicle } from "../types";

type VehicleListProps = {
  setSelectedVehicle: Function;
};

const VEHICLE_LIST_API = process.env.REACT_APP_VEHICLES_API ?? "";

const VehicleList = ({ setSelectedVehicle }: VehicleListProps) => {
  const [selectedId, setSelectedId] = useState("");

  const [vehicles, refreshVehicles]: [Vehicle[], () => Promise<void>] =
    useFetchVehicles();

  const getVehicleDetailsById = useCallback(
    async (id: string) => {
      const response = await fetch(`${VEHICLE_LIST_API}/${id}`);
      const data: Vehicle = await response.json();
      setSelectedVehicle(data);
    },
    [setSelectedVehicle]
  );

  const handleClick = (e: React.SyntheticEvent) => {
    //@ts-ignore
    const selectedId = e.currentTarget.getAttribute("vehicleid");

    console.log("selected:", selectedId);
    if (selectedId) {
      getVehicleDetailsById(selectedId);
      setSelectedId(selectedId);
    }
  };

  return (
    <div className="container--sm">
      <table>
        <thead className="thead__vehicle">
          <th>Name</th>
          <th>Color</th>
          <th>Plate Number</th>
        </thead>
        <tbody>
          {vehicles &&
            vehicles.map((v, idx) => (
              <tr
                className={`tr__vehicle ${
                  selectedId === v.id && "tr__selected"
                }`}
                key={idx}
                onClick={handleClick}
                //@ts-ignore
                vehicleid={v.id}
              >
                <td>{v.name}</td>
                <td>{v.color}</td>
                <td>{v.plate_number}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleList;
