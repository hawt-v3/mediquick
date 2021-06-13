import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import './style.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import markerUrl from "../../assets/flag-3d-icon-small.webp"
import Truck from '../../assets/ambulance-3d-icon-small.webp';

const Maps = () => {

  const Map = ReactMapboxGl({
    accessToken: (process.env.REACT_APP_MAPBOX_TOKEN)
  })
  
  return (
    <div>
    <Map
      containerStyle={{
        height: '70vh',
        width: '66%',
        position: 'absolute',
        right: '4.5vw',
        top: '17vh',
        transition: '.5s',
        overflow: 'hidden',
        borderRadius: '15px',
      }}
      center={[-117.06651266267941, 32.76570649214452]}
      flyToOptions={{
        speed: 2
        }}
      pitch = {[60]}
      style="mapbox://styles/mapbox/light-v10"
      zoom = {[16]}
      >
        <Marker

            coordinates={[-117.06651266267941, 32.76570649214452]}
          >
            <img src={markerUrl} alt="..." />
        </Marker>
        <Marker
      
            coordinates={[-117.0665126, 32.765706]}
          >
            <img src={Truck} alt=".." />
          </Marker>
        }
    </Map>
    </div>
    );
  }
export default Maps; 
/*import markerUrl from "../../assets/flag-3d-icon-small.webp"
import Truck from '../../assets/ambulance-3d-icon-small.webp';
import { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

export default function Maps() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });

  return(
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/leighhalliday/cjufmjn1r2kic1fl9wxg7u1l4"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
<Marker

latitude={45.4211}
longitude={-75.6903}
>
<img src={markerUrl} alt="..." />
</Marker>
<Marker

latitude={45.42}
longitude={-75.69}
>
<img src={Truck} alt=".." />
</Marker>
          

      </ReactMapGL>
    </div>
  );
} */
