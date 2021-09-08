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
      try {
        const response = await fetch(`${VEHICLE_LIST_API}/${id}`);
        const data: Vehicle = await response.json();
        setSelectedVehicle(data);
      } catch (e) {
        console.error(
          `An error occurred while fetching vehicle data: ${
            (e as Error).message
          }`
        );
      }
    },
    [setSelectedVehicle]
  );

  const handleClick = (e: React.SyntheticEvent) => {
    //@ts-ignore
    const selectedId = e.currentTarget.getAttribute("vehicleid");

    if (selectedId) {
      getVehicleDetailsById(selectedId);
      setSelectedId(selectedId);
    }
  };

  return (
    <div className="container--sm">
      <table>
        <thead className="thead__vehicle">
          <th>#</th>
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
                <td>{idx + 1}</td>
                <td>{v.name}</td>
                <td style={{ backgroundColor: v.color }}>{v.color}</td>
                <td>{v.plate_number}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleList;
