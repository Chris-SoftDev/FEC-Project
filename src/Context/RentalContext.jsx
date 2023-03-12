import { createContext, useState, useEffect, useRef } from "react";

const RentalContext = createContext();

export const RentalProvider = ({ children }) => {

    const [showRentalState, setshowRentalState] = useState(false)
    const [showRentalMore, setShowRentalMore] = useState(false)
    const miniLearnMoreRef = useRef()
    

    const openRental = () => {
        setshowRentalState(true)
      }
  
      const closeRental = () => {
        setshowRentalState(false)
      }

      const openShowMore = () => {
        setShowRentalMore(true)

      }

      const closeShowMore = () => {
        setShowRentalMore(false)

      }

      useEffect(() => {
        const checkIfClickedOutside = e => {
        // If the menu is open and the clicked target is not within the menu, then close the menu (miniLearnMoreRef.current && !
        if (showRentalState && miniLearnMoreRef.current && !miniLearnMoreRef.current.contains(e.target)) {
            setshowRentalState(false)
            setShowRentalMore(false)
            
            
        }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [miniLearnMoreRef])  

    useEffect(() => {
        showRentalState 
          ? (document.body.parentElement.style.overflowY = "clip")
          : (document.body.parentElement.style.overflowY = "auto");
      }, [showRentalState]);

      
    return (
        <RentalContext.Provider 
            value ={{
            showRentalState,
            openRental,
            closeRental,
            miniLearnMoreRef,
            openShowMore,
            closeShowMore,
            showRentalMore
            
              
            }}
        >
            {children}
        </RentalContext.Provider>

    )

}

export default RentalContext