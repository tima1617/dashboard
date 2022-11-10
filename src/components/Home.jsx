import "./Home.css";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet";
import iconMarker from "../components/constants";
import { useRef, useState } from "react";
import { signup, logout, login, useAuth } from "../firebase";

function Home() {
  const position = [47.203, -1.55];
  const position2 = [47.203, -1.535];

  function MyComponent() {
    const map = useMapEvents({
      click: () => {
        map.locate();
      },
      locationfound: (location) => {
        console.log("location found:", location);
      },
    });
    return null;
  }

  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Logout error.");
    }
    window.location.href = "/";
    setLoading(false);
  }

  return (
    <div className="main">
      <div className="logout_container">
        <button onClick={handleLogout}>Se déconnecter</button>
        <a href="/stats">
          <button>Statistiques</button>
        </a>
      </div>
      <MapContainer
        id="map"
        center={[47.203, -1.537]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <MyComponent></MyComponent>
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
