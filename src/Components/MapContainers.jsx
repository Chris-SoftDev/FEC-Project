import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  
  
  
  const defaultCenter = {
    lat: 43.67851, lng: -116.01587
  }
  const key = "AIzaSyCLhK_OJTjnZUg31oxd_2YZPmsPJNwbn8U"
  const id = ["37b04b85b638c167"]
  
  return (
     <LoadScript
       googleMapsApiKey={key} mapIds={id} disableDefaultUI={true}>
        <GoogleMap
          //mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
            mapContainerStyle={{height: "480px", width: "1120px"}}
            options= {{ zoomControl: false, mapTypeControl:true, streetViewControl: false, disableDefaultUI: true }}
            
            
          
        />
     </LoadScript>
  )
}

export default MapContainer;