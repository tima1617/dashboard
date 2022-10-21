import "./Home.css";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "./constants";
import Leflet from "leaflet";

function Home() {
  const position = [51.505, -0.09];

  function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        Leflet.marker([lat, lng], { icon }).addTo(map);
      },
    });
    return null;
  }

  return (
    <div className="main">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <center>
              Téléphone portable
              <br /> James Anderson.
            </center>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Home;
