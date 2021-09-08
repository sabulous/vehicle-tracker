import useTrackVehicleById from "../hooks/useTrackVehicleById";
import { Vehicle } from "../types";
import GoogleMapView from "./GoogleMapView";

type TelemetryProps = {
  vehicleData?: Vehicle;
};

const GOOGLE_MAP_URL = process.env.REACT_APP_GOOGLE_MAP_URL ?? "";

const VehicleTelemetryInfo = ({ vehicleData }: TelemetryProps) => {
  const telemetry = useTrackVehicleById(vehicleData?.id);

  /*vehicle_id: string;
  timestamp: number;
  lat: number;
  lng: number;
  speed: number;
  cpu_usage: number;
  battery_level: number; */
  return (
    <div className="container--md container container--pad container--margin container--map">
      <table>
        <thead>
          <th>Id</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Speed</th>
          <th>Cpu Usage</th>
          <th>Battery Level</th>
        </thead>
        <tbody>
          <tr>
            <td>{telemetry?.vehicle_id}</td>
            <td>{telemetry?.lat.toFixed(4)}</td>
            <td>{telemetry?.lng.toFixed(4)}</td>
            <td>{telemetry?.speed}</td>
            <td>{telemetry?.cpu_usage} %</td>
            <td>{telemetry?.battery_level} %</td>
          </tr>
        </tbody>
      </table>
      {telemetry && (
        <GoogleMapView
          lat={telemetry?.lat}
          lng={telemetry?.lng}
          vehicleData={vehicleData}
          googleMapURL={GOOGLE_MAP_URL}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      )}
    </div>
  );
};

export default VehicleTelemetryInfo;
