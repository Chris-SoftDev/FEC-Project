import React from 'react';
import { GoogleMap, MarkerF, LoadScript, useLoadScript } from '@react-google-maps/api';


const MapContainer2 = () => {
  
  const { isLoaded } = useLoadScript ({
    googleMapsApiKey: "AIzaSyCLhK_OJTjnZUg31oxd_2YZPmsPJNwbn8U"

  })
  
  const defaultCenter = {
    lat: 43.67851, lng: -116.01587
  }
  const key = "AIzaSyCLhK_OJTjnZUg31oxd_2YZPmsPJNwbn8U"
  const id = ["37b04b85b638c167"]

  const svg = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="67.000000pt" height="67.000000pt" viewBox="0 0 67.000000 67.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,67.000000) scale(0.050000,-0.050000)" fill="#ea4826" stroke="none"> <path d="M486 1127 c-393 -139 -397 -717 -6 -892 50 -23 112 -58 138 -78 48 -38 49 -37 100 10 29 27 84 58 123 71 95 30 230 171 268 280 136 385 -235 747 -623 609z m392 -434 c4 -10 -3 -12 -15 -5 -16 10 -23 -17 -23 -87 0 -99 -1 -101 -60 -101 -58 0 -60 3 -60 91 0 88 -2 91 -55 85 -52 -6 -55 -11 -49 -91 7 -83 5 -85 -55 -85 -60 0 -61 2 -61 101 0 63 -8 97 -20 89 -57 -36 -7 37 82 118 l102 93 103 -95 c57 -52 106 -103 111 -113z"/> <path d="M1180 232 c-30 -30 -25 -43 31 -69 88 -40 129 -30 129 32 0 59 -112 85 -160 37z"/> <path d="M1056 116 c-29 -29 -46 -36 -52 -19 -6 18 -16 14 -35 -11 -41 -53 -35 -71 14 -44 36 19 48 17 68 -9 38 -53 59 -38 64 47 5 93 0 95 -59 36z"/> <path d="M1153 96 c-16 -64 7 -96 69 -96 78 0 77 59 0 103 -56 32 -59 31 -69 -7z"/> <path d="M188 32 c-37 -38 -37 -38 2 -22 22 8 72 27 110 42 l70 27 -72 -5 c-39 -2 -88 -21 -110 -42z"/> </g> </svg> '
   
  const customMarker = {
    path: "M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805",
    fillColor: "red",
    fillOpacity: 2,
    strokeWeight: 1,
    rotation: 0,
    scale: 1,
  };

 
  function Map() {
    return ( 
      <GoogleMap 
          zoom={13}
          center={defaultCenter}
          mapContainerStyle={{height: "600px", width: "900px"}}
          options= {{ 
            zoomControl: true,
            zoomControlOptions: { position: 7}, 
            mapTypeControl: false, 
            streetViewControl: true,
            streetViewControlOptions: { position: 7}, 
            disableDefaultUI: true ,
            styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] }]
          }} 
      >
       <MarkerF key="marker_1"
            position={{
              lat: 43.67851,
              lng: -116.01587
            }}
            icon={{ url: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg), size: new google.maps.Size(75,76)}}
            
        />
        
      </GoogleMap>
    )
  }

  if (!isLoaded) return <div>Loading...</div>

  return <Map />
}
  

export default MapContainer2;