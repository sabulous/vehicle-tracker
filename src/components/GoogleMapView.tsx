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
    <GoogleMap defaultZoom={16} center={{ lat, lng }}>
      {showMarker && (
        <Marker
          position={{ lat, lng }}
          label={`${vehicleData?.name} - ${vehicleData?.plate_number}`}
        />
      )}
    </GoogleMap>
  ))
);

export default GoogleMapView;
