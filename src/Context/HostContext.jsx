import { createContext, useState, useEffect } from "react";

export const HostContext = createContext()

export const HostProvider = ({ children }) => {

    const [showHouseRules, setShowHouseRules] = useState(false)
    const [showMoreSafety, setShowMoreSafety] = useState(false)
    const [showCancellation, setShowCancellation] = useState(false)

    const openHouseRules = () => {
        setShowHouseRules(true)
    }

    const closeHouseRules = () => {
        setShowHouseRules(false)
    }

    const openSafety = () => {
        setShowMoreSafety(true)
    }

    const closeSafety = () => {
        setShowMoreSafety(false)
    }

    const openCancellation = () => {
        setShowCancellation(true)
    }

    const closeCancellation = () => {
        setShowCancellation(false)
    }

    // Disables vertical scroll-bar when Login/Language window is visible
    useEffect(() => {
        showHouseRules || showMoreSafety || showCancellation
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = "auto");
      }, [showHouseRules, showMoreSafety, showCancellation]);

    return (
        <HostContext.Provider 
            value ={{
                showHouseRules,
                openHouseRules,
                closeHouseRules,
                showMoreSafety,
                openSafety,
                closeSafety,
                showCancellation,
                openCancellation,
                closeCancellation
            }}
        >
            {children}
        </HostContext.Provider>

    )
}
