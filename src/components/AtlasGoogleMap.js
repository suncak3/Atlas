import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '450px',
    border: '0'
};

// These coordinates match your iframe (approximate location in Astana/Nur-Sultan, Kazakhstan)
const center = {
    lat: 51.144942252545405,
    lng: 71.41223834076101
};

const options = {
    disableDefaultUI: false,
    zoomControl: true,
    mapTypeId: 'satellite' // This matches the satellite view in your iframe
};

function MyGoogleMap() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyABgD2zlVZ35oW3ThB5Y7mYphp25jKiHFo" // You need to replace this with your actual API key
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback() {
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17} // Approximately matching your iframe zoom level
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={options}
        >
            { /* You can add child components here such as markers */ }
        </GoogleMap>
    ) : <div>Loading...</div>;
}

export default React.memo(MyGoogleMap);