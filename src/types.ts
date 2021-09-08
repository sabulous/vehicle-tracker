export type Vehicle = {
  color: string;
  id: string;
  name: string;
  plate_number: string;
};

export type VehicleTelemetry = {
  vehicle_id: string;
  timestamp: number;
  lat: number;
  lng: number;
  speed: number;
  cpu_usage: number;
  battery_level: number;
};
