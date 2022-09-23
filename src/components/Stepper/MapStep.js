import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useDispatch, useSelector } from "react-redux";
import { getReverseGeocoding } from "../../features/order/order";
import debounce from '../../utils/debounce'


const ChildComponentMap = ({position}) => {
    const map = useMap();
    const dispatch = useDispatch();
    const activeStep = useSelector((state) => state.order.activeStep);

    const getCurrentPosition = debounce(
        (position) => {
            dispatch(getReverseGeocoding(position))
        },
        3000
    )


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
                    getCurrentPosition({lat, lng});
                }
            }}>
            </Marker>
        </>
    );
}

const MapStep = () => {
    const position = useSelector((state) => state.order.coords); 
    const address = useSelector((state) => state.order.address);
    return (
        <div className="stepper-map-step">
            {address && <div className="stepper-map-step-address">{address}</div>}
            <MapContainer id="mapleaflet" center={position} zoom={13}>
                <ChildComponentMap position={position}/>
            </MapContainer>
        </div>
    )
}

export default MapStep;