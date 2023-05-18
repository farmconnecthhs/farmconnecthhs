'use client';
import L, { LatLng, Icon } from 'leaflet';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';

interface MapProps {
  farms: { id: number; latitude: number; longitude: number; name: string }[];
}

const MapControler: React.FunctionComponent = () => {
  const map = useMap();
  map.on('move', () => {
    setTimeout(() => {
      map.invalidateSize();
    }, 400);
    console.log('move');
  });
  return <></>;
};

const markerIcon: Icon = L.icon({
  iconUrl: '/mapmarker.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Map: React.FunctionComponent<MapProps> = ({ farms }) => {
  const [center] = React.useState<LatLng>(new LatLng(52.2215, 6.8937));

  return (
    <div className={styles.mapContainer}>
      <MapContainer center={center} zoom={8} className={styles.mapContainer}>
        <MapControler />
        <TileLayer
          url="https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=1bOawQCdnh61NAAZkKPUFGdbZbAUn4eAzQDI3kLZo3SuKCsq9vPMaKStpo7yT5if"
          attribution='&copy; <a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          minZoom={0}
          maxZoom={22}
          subdomains="abcd"
          accessToken="1bOawQCdnh61NAAZkKPUFGdbZbAUn4eAzQDI3kLZo3SuKCsq9vPMaKStpo7yT5if"
        />
        {farms.map((farm) => (
          <Marker
            key={farm.id}
            position={[farm.latitude, farm.longitude]}
            icon={markerIcon}
          >
            <Popup offset={[0, -22]}>{farm.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
