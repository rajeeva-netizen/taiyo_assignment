import React from "react"
import { MapContainer, TileLayer } from 'react-leaflet';
function CovidMaps(){
    const position = [51.505, -0.09]

return(
    <div className="Report">
    <MapContainer center={[49.3,-123]} className="Map" zoom={10} maxZoom={19} minZoom={2}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </MapContainer>
    </div>
)
}

export default CovidMaps