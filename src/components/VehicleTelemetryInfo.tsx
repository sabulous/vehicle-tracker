import useTrackVehicleById from "../hooks/useTrackVehicleById";
import { Vehicle } from "../types";
import GoogleMapView from "./GoogleMapView";

type TelemetryProps = {
  vehicleData?: Vehicle;
};

const GOOGLE_MAP_URL = process.env.REACT_APP_GOOGLE_MAP_URL ?? "";

const VehicleTelemetryInfo = ({ vehicleData }: TelemetryProps) => {
  const telemetry = useTrackVehicleById(vehicleData?.id);

  return (
    <div>
      <p>{JSON.stringify(telemetry)}</p>
      {telemetry && (
        <GoogleMapView
          lat={telemetry?.lat}
          lng={telemetry?.lng}
          vehicleData={vehicleData}
          googleMapURL={GOOGLE_MAP_URL}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      )}
    </div>
  );
};

export default VehicleTelemetryInfo;
