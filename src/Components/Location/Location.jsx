import './Location.css'
import React from 'react'
import Map from './Map';
import LocationDesc from './LocationDesc';
import MapContainer from './MapContainers'
import LocationShowMore from './LocationShowMore';
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import { useContext, useState } from 'react';
//import {LocationProvider, LocationContext} from '../Context/LocationContext';
// import  from '../Context/LocationContext';


const linkStyle ={
    margin: "0rem",
    textDecoration: "none",
    color: 'black',
    
}



function Location() {
    
   

    return ( 
        
        <div className='location_default'>
            <section className='section_default'>
                <div className='location_name'>
                    <div className='location_name_box'>
                        <h2 className='location_title'>Where you'll be</h2>
                         

                    </div>
                </div>
                <div className='location_map'>
                <MapContainer />
                
                </div>
                <div className='location_city'>
                    Boise, Idaho, United States
                </div>
                <LocationDesc />
                
                
                <Link to='/location' style={linkStyle}>Show More</Link> 
               
                             
                


            </section>     
        </div>

        
            
        
    );
}

export default Location;