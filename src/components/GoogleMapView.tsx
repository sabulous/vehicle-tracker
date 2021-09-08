import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";
import { Vehicle } from "../types";

type GoogleMapViewProps = {
  lat: number;
  lng: number;
  showMarker: boolean;
  vehicleData?: Vehicle;
};

const GoogleMapView = withScriptjs(
  withGoogleMap(({ lat, lng, showMarker, vehicleData }: GoogleMapViewProps) => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 51.75429320627387, lng: -1.2632131576538086 }}
    >
      {showMarker && (
        <Marker
          defaultPlace="center"
          position={{ lat, lng }}
          label={`${vehicleData?.name} - ${vehicleData?.plate_number}`}
        />
      )}
    </GoogleMap>
  ))
);

export default GoogleMapView;
