import ReactMapboxGl from 'react-mapbox-gl';
import './style.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
});

const Maps = (props) => {
  return (
    <Map
      antialias={true}
      containerStyle={{
        height: '70vh',
        width: '66%',
        position: 'absolute',
        right: '4.5vw',
        top: '17vh',
        transition: '.5s',
        overflow: 'hidden',
        borderRadius: '15px',
        bearingL: 0
      }}
      center={[-117.06651266267941, 32.76570649214452]}
      flyToOptions={{
        speed: 2
        }}
      onClick={props.mapClick}
      onStyleLoad={props.mapLoad}
      pitch = {[60]}
      style="mapbox://styles/mapbox/light-v10"
      zoom = {[16]}
    >
    </Map>
    );
  }
export default Maps;