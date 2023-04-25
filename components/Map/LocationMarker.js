import { useEffect, useState } from "react";
import { useMapEvents } from "react-leaflet/hooks";
import { Marker, Popup } from "react-leaflet";

export default function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    locationfound: (e) => {
      console.log("e in useMapEvents", e);
      setPosition(e.latlng);
      map.flyTo(e.latlng, 14);
    },
  });

  useEffect(() => {
    map.locate();
  }, [map]);

  return (
    position && (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  );
}
