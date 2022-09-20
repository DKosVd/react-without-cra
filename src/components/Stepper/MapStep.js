import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useSelector } from "react-redux";



const ChildComponentMap = ({position}) => {
    const map = useMap();

    const activeStep = useSelector((state) => state.order.activeStep);

    useEffect( () => {
        map.invalidateSize();
    }, [activeStep]);
    return (
        <>
            <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            <Marker position={position} draggable={true} eventHandlers={{
                dragend:(e) => {
                    const marker = e.target;
                    const {lat, lng} = marker.getLatLng();
                    console.log(lat, lng)
                }
            }}>
            </Marker>
        </>
    );
}

const MapStep = () => {
    const position = useSelector((state) => state.order.coords); 
    return (
        <div className="stepper-map-step">
            <MapContainer id="mapleaflet" center={position} zoom={13}>
                <ChildComponentMap position={position}/>
            </MapContainer>
        </div>
    )
}

export default MapStep;