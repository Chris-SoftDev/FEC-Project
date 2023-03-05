import './Location.css'
import React from 'react'
import Map from './Map';
import LocationDesc from './LocationDesc';
import MapContainer from './MapContainers'



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
                <div className="location_description">
                Wilderness Ranch is a residential subdivision that offers rural living in a mountainous setting that ranges from high desert to subalpine forest. Our community enjoys four distinct seasons, our own system of trails, wildlife galore, and close proximity to state and National Forest land. Wilderness Ranch is about twelve miles northeast of Boise as the eagles fly and about 24 miles along Highway 21 toward Idaho City. There are about 275 lots at Wilderness...
                </div>
                <a className="show_more">
                    Show more
                </a>
                


            </section>     
        </div>
    );
}

export default Location;