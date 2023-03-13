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
          ? (document.body.parentElement.style.overflowY = "clip")
          : (document.body.parentElement.style.overflowY = "auto");
      }, [showLocation]);

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