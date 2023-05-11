'use client';
import React, { useCallback, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';

import { LatLngExpression } from 'leaflet';
import L from 'leaflet';

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

const Map: React.FunctionComponent<MapProps> = ({ farms }) => {
  const [center, setCenter] = React.useState<LatLngExpression>([
    52.3783, 4.9009,
  ]);

  let mapRef: any = React.useRef<L.Map>();

  const handleMapMove = useCallback(() => {
    const map = mapRef.current;
    if (map != null) {
      const newCenter = map.leafletElement.getCenter();
      if (newCenter.lat !== center[0] || newCenter.lng !== center[1]) {
        setCenter([newCenter.lat, newCenter.lng] as LatLngExpression);
      }
    }
  }, []);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={center}
        zoom={8}
        style={{ height: '100%', width: '100%' }}
      >
        <MapControler />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {farms.map((farm) => (
          <Marker key={farm.id} position={[farm.latitude, farm.longitude]}>
            <Popup>{farm.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
