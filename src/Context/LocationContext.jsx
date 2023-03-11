import { createContext, useState, useEffect } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {

    const [showLocation, setshowLocation] = useState(false)
    

    const openLocation = () => {
        setshowLocation(true)
      }
  
      const closeLocation = () => {
        setshowLocation(false)
      }
    useEffect(() => {
        showLocation 
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = "auto");
      }, [showLocation]);

    //   useEffect(() => {
    //     const fetchHostData = async () => {
    //         const response = await fetch('http://localhost:3000/property');
    //         const host = await response.json();
    //         setHostData(host[0].host_info);
            
            
    //     };

    //     fetchHostData();
        
    // },[]) 
    
    return (
        <LocationContext.Provider 
            value ={{
              showLocation,
              openLocation,
              closeLocation,
              
            }}
        >
            {children}
        </LocationContext.Provider>

    )

}

export default LocationContext