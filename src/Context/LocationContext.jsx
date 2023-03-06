import { createContext, useState, useEffect, useRef } from "react";

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

    return (
        <LocationContext.Provider 
            value ={{
              showLocation,
              openLocation
            }}
        >
            {children}
        </LocationContext.Provider>

    )

}