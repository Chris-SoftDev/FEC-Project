import React, {Link} from 'react'
import MapContainer from './MapContainers'

const linkStyle ={
    margin: "0rem",
    textDecoration: "none",
    color: 'black',
    
}
export default function LocationShowMore() {
  return (

    
     <>
     {/* <Link to='/' >Home</Link> */}
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
// import { useContext } from "react";
// import { LocationContext } from "../Context/ReviewContext";
// import './LocationShowsMore.css'

// export default function LocationShowMore() {
//   const { showLocation, closeLocation } = useContext(LocationContext);

//   return (
//     <>
//       {showLocation && (
//         <div className="modal-overlay">
//           <div className="cancel-modal-container">
//             <div className="cancel-modal">
//               <div className="button-container">
//                 <button className="close-modal" onClick={closeLocation}>X</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
