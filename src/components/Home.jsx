import "./Home.css";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet";
import iconMarker from "../components/constants";

function Home() {
  const position = [47.203, -1.55];
  const position2 = [47.203, -1.535];

  return (
    <div className="main">
      <MapContainer center={[47.203, -1.537]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={iconMarker}>
          <Popup>
            <center>
              Téléphone portable
              <br /> James Anderson.
            </center>
          </Popup>
        </Marker>
        <Marker position={position2} icon={iconMarker}>
          <Popup>
            <center>
              Vidéo projecteur
              <br /> James Anderson.
            </center>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Home;
