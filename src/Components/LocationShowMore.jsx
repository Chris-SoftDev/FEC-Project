import React, {useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Location.css'
import MapContainer2 from './MapContainer2'

const linkStyle ={
    margin: "0rem",
    textDecoration: "none",
    color: 'black',
    
}


const LocationShowMore = () => {

    const [more, setMore] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const navigate = useNavigate();

    const openMore = () => {
        setMore(true)
        setSecond(false)
        setThird(false)
    }
    const openSecond = () => {
        setMore(false)
        setThird(false)
        setSecond(true)
    }
    const openThird = () => {
        setMore(false)
        setSecond(false)
        setThird(true)
    }

    if (more === true) {

        
        return (
            <>
            
        <div className="content-sidebar">
            
            <div className="content-sidebar-text">
                
                <button className="btn-close" onClick={() => navigate(-1)}>X</button>
                <div className="box1">Where you'll be</div>
                <div className="box2">Boise, Idaho, United States</div>
                <div className="box3">Wilderness Ranch is a residential subdivision that offers rual living in a mountainous setting that ranges from high deser to subalpine forest. system of trails, wildlife galore, and close proximity to state and National Forest land. Wilderness Ranch is about twelve miles northeast of Boise as the eagles fly and about 24 miles along Highway 21 toward Idaho City. There are about 275 lots at Wilderness Ranch totaling almost 1,200 acres. An additional 800 acres of common area is owned and maintained by the Wilderness Ranch HOA.</div>
                <div className="box2">Getting around</div>
                <div className="box3">The roads in Wildernes Ranch are well plowed/maintained year round However, they are legit dirt mountain roads and are quite steep in...</div>
                <a className="btn-read-more" onClick={() => openThird()}>Read More </a>
                {/* <a className="btn-read-more2" >Show Host guidebook </a> */}
            </div>

            <div className="content-sidebar-map">
                <div className="movement"></div>
                <MapContainer2 />
                <div className="movement"></div>
            </div>
            
        </div>
        </>

        )
        
    } 
    if (second === true) {
        console.log('Test to see if second state works')
        return (
          
            <>
            
        <div className="content-sidebar">
            
            <div className="content-sidebar-text">
                
                <button className="btn-close" onClick={() => navigate(-1)}>X</button>
                <div className="box1">Where you'll be</div>
                <div className="box2">Boise, Idaho, United States</div>
                <div className="box3">Wilderness Ranch is a residential subdivision that offers rual living in a mountainous setting that ranges from high deser to subalpine forest. Our...</div>
                <a className="btn-read-more" onClick={() => openThird()}>Read More </a> 
                <div className="box2">Getting around</div>
                <div className="box3">The roads in Wildernes Ranch are well plowed/maintained year round However, they are legit dirt mountain roads and are quite steep in places. *Winter access requires that you have a 4WD/AWD vehicle, with deep treaded all-season tires, and absolutely bring chains and know how to use them.* The drive is worth it, but the road is no-joke and there is no cell coverage from Lucky Peak until you get to our driveway. When the road is dry, a 2WD/FWD vehicle with tires in good condition is typically just fine.</div>
                {/* <a className="btn-read-more" onClick={() => openThird()}>Read More </a>  */}
                <br/>
                <br/>
                <a className="btn-read-more2" >Show Host guidebook </a>
            </div>

            <div className="content-sidebar-map">
                <div className="movement"></div>
                <MapContainer2 />
                <div className="movement"></div>
            </div>
            
        </div>
        </>
        )
    }
    if (third === true) {
        console.log('TEsting')
        return (
            <>
        <div className="content-sidebar">
            
            <div className="content-sidebar-text">
                
                <button className="btn-close" onClick={() => navigate(-1)}>X</button>
                <div className="box1">Where you'll be</div>
                <div className="box2">Boise, Idaho, United States</div>
                <div className="box3">Wilderness Ranch is a residential subdivision that offers rural living in a mountainous setting that ranges from high desert to subalpine forest. Our community enjoys four distinct seasons, our own system of trails, wildlife galore, and close proximity to state and National Forest land. Wilderness Ranch is about twelve miles northeast of Boise as the eagles fly and about 24 miles along Highway 21 toward Idaho City. There are about 275 lots at Wilderness Ranch totaling almost 1,200 acres. An additional 800 acres of common area is owned and maintained by the Wilderness Ranch HOA.</div>
                
                <div className="box2">Getting around</div>
                <div className="box3">The roads in Wildernes Ranch are well plowed/maintained year round However, they are legit dirt mountain roads and are quite steep in places. *Winter access requires that you have a 4WD/AWD vehicle, with deep treaded all-season tires, and absolutely bring chains and know how to use them.* The drive is worth it, but the road is no-joke and there is no cell coverage from Lucky Peak until you get to our driveway. When the road is dry, a 2WD/FWD vehicle with tires in good condition is typically just fine.</div>
                <a className="btn-read-more2">Show Host guidebook </a> 
            </div>

            <div className="content-sidebar-map">
                <div className="movement"></div>
                <MapContainer2 />
                <div className="movement"></div>
            </div>
            
        </div>
        </>
        )
    }
    
    return (

        <>
        <div className="content-sidebar">
            
            <div className="content-sidebar-text">
                
                <button className="btn-close" onClick={() => navigate(-1)}>X</button>
                <div className="box1">Where you'll be</div>
                <div className="box2">Boise, Idaho, United States</div>
                <div className="box3">Wilderness Ranch is a residential subdivision that offers rual living in a mountainous setting that ranges from high deser to subalpine forest. Our...</div>
                <a className="btn-read-more" onClick={() => openMore()}>Read More </a>
                <div className="box2">Getting around</div>
                <div className="box3">The roads in Wildernes Ranch are well plowed/maintained year round However, they are legit dirt mountain roads and are quite steep in...</div>
                <a className="btn-read-second" onClick={() => openSecond()}>Read More </a>
                <br/>
                <br/>
                <div>
                    <a className="link-guide" href="https://www.airbnb.com/s/guidebooks?refinement_paths[]=/guidebooks/705162" target="_blank">
                    Show Host guidebook 
                    </a>
                </div>
            </div>

            <div className="content-sidebar-map">
                <div className="movement"></div>
                <MapContainer2 />
                <div className="movement"></div>
            </div>
            
        </div>
        </>
        
        
    
    )
}

export default LocationShowMore

