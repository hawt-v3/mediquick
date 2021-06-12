import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl';
//import MapPin from './mapPin'
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
      <Marker
            coordinates={[user.long, user.lat]}
            anchor="bottom"
            offset={[400, -window.innerHeight * .915]}
            onClick={() => {
              console.log('CALLING')
              props.setCall(user.long, user.lat);
            }}
          >
            <CustomMarker
              id={user.caseId}
              status={user.status}
            />
          </Marker>
      
    </Map>
    );
  }
export default Maps;