import useTrackVehicleById from "../hooks/useTrackVehicleById";

type TelemetryProps = {
  id: string;
};

const VehicleTelemetryInfo = ({ id }: TelemetryProps) => {
  const telemetry = useTrackVehicleById(id);

  return <p>{JSON.stringify(telemetry)}</p>;
};

export default VehicleTelemetryInfo;
