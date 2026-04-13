"use client";

import * as React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet's default icon paths broken by Next.js/webpack asset bundling
const pinIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Verified coordinates for #38 Paraiso St, Lower Bicutan, Taguig, Philippines
const COORDS: [number, number] = [14.4861, 121.0469];

export function LeafletMap() {
  return (
    <MapContainer
      center={COORDS}
      zoom={16}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", minHeight: "380px", background: "#0a0a0a" }}
      className="rounded-3xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={COORDS} icon={pinIcon}>
        <Popup>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", lineHeight: "1.6", minWidth: "160px", padding: "4px 0" }}>
            <strong style={{ display: "block", marginBottom: "6px", color: "#e11d48" }}>🔴 Red Oscar</strong>
            #38 Paraiso St.<br />
            Lower Bicutan, Taguig<br />
            Philippines
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
