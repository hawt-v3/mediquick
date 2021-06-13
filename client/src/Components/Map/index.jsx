import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import './style.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import markerUrl from "../../assets/flag-3d-icon-small.webp"
import Truck from '../../assets/ambulance-3d-icon-small.webp';

const Maps = () => {
  const markDate = [{
    "properties": { "NAME": "Bearbrook Skateboard Park", "DESCRIPTIO": "Flat asphalt surface, 5 components", "PARK_ID": 960 }, "geometry": { "coordinates": [-117.06651266267941, 32.76570649214452] }
  }]
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
