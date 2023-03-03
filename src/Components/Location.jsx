import './Location.css'
import React from 'react'
import Map from './Map';
import LocationDesc from './LocationDesc';


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
                <iframe width="1120" height="600" style={{}} loading="lazy" src="https://www.google.com/maps/embed/v1/view?zoom=17&center=43.6784%2C-116.0157&key=AIzaSyCLhK_OJTjnZUg31oxd_2YZPmsPJNwbn8U" title="myMap"></iframe>
                </div>
                <div className='location_city'>
                Boise, Idaho, United States
                </div>
                <div className="location_description">
                Wilderness Ranch is a residential subdivision that offers rural living in a mountainous setting that ranges from high desert to subalpine forest. Our community enjoys four distinct seasons, our own system of trails, wildlife galore, and close proximity to state and National Forest land. Wilderness Ranch is about twelve miles northeast of Boise as the eagles fly and about 24 miles along Highway 21 toward Idaho City. There are about 275 lots at Wilderness
                </div>
                


            </section>     
        </div>
    );
}

export default Location;