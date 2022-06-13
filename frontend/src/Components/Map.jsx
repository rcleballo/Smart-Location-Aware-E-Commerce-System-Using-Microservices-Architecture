import React, { useEffect, useState } from 'react';
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from "@react-google-maps/api";
import axios from 'axios';

const Map = (props) => {
    const [location, setLocation] = useState([]);
    const [activeMarker, setActiveMarker] = useState(null);
    const [currentLat, setCurrentLat] = useState(0);
    const [currentLng, setCurrentLng] = useState(0);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAwVLxd0JEVc3FHp2Zg3j2mMvYvpfg73jE"
    })

    useEffect(() => {
        const getLocation = async () => {
            try {
                navigator.geolocation.getCurrentPosition(function(position) {
                    setCurrentLat(position.coords.latitude);
                    setCurrentLng(position.coords.longitude);
                });
                const res = await axios.get(
                    "http://localhost:8080/api/location/near", 
                    {
                        params: {
                            name: "User_Loc",
                            location: [currentLat, currentLng]
                        }
                    }
                ).then((res) => {
                    res.data.map((item) => {
                        const [lat, lng] = item.location.coordinates;
                        const coordinates = { lat, lng };
                        item.location.coordinates = coordinates;
                    });
                    setLocation(res.data);
                }, (err) => {
                    console.log(err);
                });
            } catch(err) {
                console.log(err);
            }
        }
        getLocation();
    })
    

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    const handleOnLoad = (map) => {
        try {
            const bounds = new window.google.maps.LatLngBounds();
            location.forEach(({ item }) =>{
                bounds.extend(item.location.coordinates)
            });
            map.fitBounds(bounds);
        } catch(err) {
            console.log(err);
        }
    };

    /*const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(position);
        map.fitBounds(bounds);
        setMap(map)
      }, [])*/
    const center = {
        lat: currentLat, 
        lng: currentLng
    }

  return isLoaded ? (
    <GoogleMap
      center={center}
      defaultZoom={8}
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100vw", height: "100vh" }}
    >
      {location.map((item) => (
        <Marker
          key={item._id}
          position={item.location.coordinates}
          onClick={() => handleActiveMarker(item._id)}
        >
          {activeMarker === item._id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{item.name}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  ) : <></>
}

export default Map;