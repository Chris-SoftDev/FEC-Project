import { createContext, useState, useEffect } from "react";
import { format } from 'date-fns' //to format the dates

export const HostContext = createContext()

export const HostProvider = ({ children }) => {

    const [showHouseRules, setShowHouseRules] = useState(false)
    const [showMoreSafety, setShowMoreSafety] = useState(false)
    const [showCancellation, setShowCancellation] = useState(false)
    const [hostData, setHostData] = useState([])
    const [cohostData, setCohostData] = useState([])
    const [safetyData, setSafetyData] = useState([])
    const [rulesData, setRulesData] = useState([])
    const [cancelData, setCancelData] = useState([])
    const [additionalRules, setAdditionalRules] = useState([])
    const [dateRange, setDateRange] = useState([]) //dates in Mar 14, 2023 format


    useEffect(() => {
        const fetchHostData = async () => {
            const response = await fetch('http://localhost:3000/property');
            const host = await response.json();
            setHostData(host[0].host_info);
            setCohostData(host[0].cohost_info)
            setSafetyData(host[0].safety)
            setRulesData(host[0].house_rules)
            setCancelData(host[0].cancellation_policy)
            setAdditionalRules(host[0].house_rules.additional_rules)
        };

        fetchHostData();
    },[]) 

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

    const emptyCalendar = () => {
        setDateRange([])
    }


    // Disables vertical scroll-bar when Login/Language window is visible
    useEffect(() => {
        showHouseRules || showMoreSafety || showCancellation
          ? (document.body.parentElement.style.overflowY = "hidden")
          : (document.body.parentElement.style.overflowY = "auto");
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
                closeCancellation,
                hostData,
                cohostData,
                safetyData,
                rulesData,
                cancelData,
                additionalRules,
                setDateRange,
                dateRange,
                emptyCalendar
            }}
        >
            {children}
        </HostContext.Provider>

    )
}
