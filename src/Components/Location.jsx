import './Location.css'
import React from 'react'
import Map from './Map';


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
                <div>
                    Testing
                </div>


            </section>     
        </div>
    );
}

export default Location;