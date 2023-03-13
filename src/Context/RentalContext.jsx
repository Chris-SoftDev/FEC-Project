import { createContext, useState, useEffect, useRef } from "react";

const RentalContext = createContext();

export const RentalProvider = ({ children }) => {

    const [showRentalState, setshowRentalState] = useState(false)
    const [showRentalMore, setShowRentalMore] = useState(false)
    const miniLearnMoreRef = useRef()
    const miniShowMoreRef =useRef()
    

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
        }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [miniLearnMoreRef])  

    useEffect(() => {
        const checkIfClickedOutside2 = e => {
        // If the menu is open and the clicked target is not within the menu, then close the menu (miniLearnMoreRef.current && !
        if (showRentalMore && miniShowMoreRef.current &&!miniShowMoreRef.current.contains(e.target)) {
            setShowRentalMore(false)
        }
        }
        document.addEventListener("mousedown", checkIfClickedOutside2)
        return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", checkIfClickedOutside2)
        }
    }, [miniShowMoreRef]) 

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
            showRentalMore,
            miniShowMoreRef
            
              
            }}
        >
            {children}
        </RentalContext.Provider>

    )

}

export default RentalContext