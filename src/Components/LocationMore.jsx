import React from 'react'
import MapContainer from './MapContainers'
import Location from './Location.css'


export default function LocationMore() {
  return (
    <>
      <div className="content-sidebar">
      <div className="content-sidebar-text">
        <div className="box">Where you'ill be</div>
        <div className="box">Boise, Idaho, United States</div>
        <div className="box">Wilderness Ranch is a residential subdivision that offers rual living in a mountainous setting that ranges from high deser to subalpine forest. Our...</div>
        <button className="box">Read More</button>
        <div className="box">Getting around</div>
        <div className="box">Boise, Idaho, United States</div>
        <div className="box">The roads in Wildernes Ranch are well plowed/maintained year round</div>
        <button className="box">Read More</button>
        <button className="box">Show Host guidebook</button>
        </div>
      <div className="content-sidebar-map">
        <div className="movement"></div>
        <MapContainer/>
        <div className="movement"></div>
      </div>
        
    </div>
    </>
  )
}