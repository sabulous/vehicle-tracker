import { useState, useEffect, useRef, MutableRefObject } from "react";
import { VehicleTelemetry } from "../types";

const VEHICLE_LIST_API = process.env.REACT_APP_VEHICLES_API ?? "";

const useTrackVehicleById = (id?: string): VehicleTelemetry | undefined => {
  const [telemetry, setTelemetry] = useState<VehicleTelemetry>();

  const timer: MutableRefObject<any> = useRef();

  useEffect(() => {
    async function getTelemetry(): Promise<void> {
      if (id) {
        const VEHICLE_TELEMETRY_API = `${VEHICLE_LIST_API}/${id}/telemetry`;
        const response = await fetch(VEHICLE_TELEMETRY_API);
        const data: VehicleTelemetry = await response.json();
        console.log(data);
        if (data) {
          setTelemetry(data);
        }
      }
    }
    getTelemetry();
    timer.current = setInterval(getTelemetry, 3000);
    return () => clearInterval(timer.current);
  }, [id]);

  return telemetry;
};

export default useTrackVehicleById;
