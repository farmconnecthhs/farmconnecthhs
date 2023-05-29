'use client';
import L, { LatLng, Icon } from 'leaflet';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';

import { FarmProfile } from '@/components/kaart/interfaces/FarmData';

interface MapProps {
  farmProfiles: FarmProfile[];
}

const MapController: React.FunctionComponent = () => {
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

const openGoogleMaps = (address: string, postalCode: string, city: string) => {
  const formattedAddress = `${address}, ${postalCode} ${city}`;
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    formattedAddress
  )}`;
  window.open(googleMapsUrl, '_blank');
};

const Map: React.FunctionComponent<MapProps> = ({ farmProfiles }) => {
  const [center] = React.useState<LatLng>(new LatLng(52.2215, 6.8937));

  return (
    <div className={styles.mapContainer}>
      <MapContainer center={center} zoom={8} className={styles.mapContainer}>
        <MapController />
        <TileLayer
          url="https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=1bOawQCdnh61NAAZkKPUFGdbZbAUn4eAzQDI3kLZo3SuKCsq9vPMaKStpo7yT5if"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          minZoom={0}
          maxZoom={22}
          subdomains="abcd"
          accessToken="1bOawQCdnh61NAAZkKPUFGdbZbAUn4eAzQDI3kLZo3SuKCsq9vPMaKStpo7yT5if"
        />
        {farmProfiles.map((farmProfile) => (
          <Marker
            key={farmProfile.profileFarmFarmId}
            position={[farmProfile.latitude, farmProfile.longitude]}
            icon={markerIcon}
          >
            <Popup offset={[0, -22]} className={styles.popup}>
              <div className={styles.popupContent}>
                <img
                  src={'/farm_placeholder.png'}
                  alt="Farm Image"
                  className={styles.popupImage}
                />
                <div className={styles.popupText}>
                  <h3>
                    <a href="">{farmProfile.Farm.name}</a>
                  </h3>
                  <p>{farmProfile.farmDescription}</p>
                  <p>
                    <a
                      href="#"
                      onClick={() =>
                        openGoogleMaps(
                          farmProfile.address,
                          farmProfile.postalCode,
                          farmProfile.city
                        )
                      }
                    >
                      <img
                        src={'/logos/Google_-G-_Logo.svg.png'}
                        alt="Google Maps Icon"
                        className={styles.googleMapsIcon}
                      />
                      {farmProfile.address}, {farmProfile.postalCode}{' '}
                      {farmProfile.city}
                    </a>
                  </p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
