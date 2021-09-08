import React from "react";
import useFetchVehicles from "../hooks/useFetchVehicles";

const VehicleList = () => {
  const [vehicles, refreshVehicles] = useFetchVehicles();

  return (
    <div>
      {vehicles &&
        vehicles.map((v, idx) => (
          <div key={idx}>
            {v.name} {v.color} {v.plate_number}
          </div>
        ))}
    </div>
  );
};

export default VehicleList;
