import { createContext, useState, useEffect, useRef } from "react";
import { format } from 'date-fns' //to format the dates

const HostContext = createContext()

export const HostProvider = ({ children }) => {
    const miniCalenderRef = useRef()
    const [showHouseRules, setShowHouseRules] = useState(false)
    const [showMoreSafety, setShowMoreSafety] = useState(false)
    const [showCancellation, setShowCancellation] = useState(false)
    const [hostData, setHostData] = useState([])
    const [cohostData, setCohostData] = useState([])
    const [safetyData, setSafetyData] = useState([])
    const [rulesData, setRulesData] = useState([])
    const [cancelData, setCancelData] = useState([])
    const [additionalRules, setAdditionalRules] = useState([])
    const [showAllAmenities, setShowAllAmenities] = useState(false)
    const [dateRange, setDateRange] = useState({from: "", to: ""}) //dates in Mar 14, 2023 format
    const [nightlyRate, setNightlyRate] = useState()
    const [isMiniCalendarVisible, setIsMiniCalendarVisible] = useState(false)
    const [keyboardModal, setKeyboardModal] = useState(false)
    const [propertyLocation, setPropertyLocation] = useState([])
    const keyboardModalRef = useRef()
    const houseRulesModalRef = useRef()
    const cancellationModalRef = useRef()
    const safetyModalRef = useRef()
    
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
            setNightlyRate(host[0].nightly_rate)
            setPropertyLocation(host[0].location)
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

    const openAmenities = () => {
        setShowAllAmenities(true)
    }

    const closeAmenities = () => {
        setShowAllAmenities(false)
    }

    const emptyCalendar = () => {
        setDateRange({from: "", to: ""})
    }

    const convertDateObjToStr = (date) => {
        const dateMonth = (date.getMonth() + 1).toString().padStart(2, '0'); // Add 1 to the month value as it is 0-indexed
        const dateDay = date.getDate().toString().padStart(2, '0');
        const dateYear = date.getFullYear().toString();
        return `${dateMonth}/${dateDay}/${dateYear}`;
    }

    // Rental Modal, Mini Calendar
    const openMiniCalendar = () => {
        setIsMiniCalendarVisible(true)
    }

    const closeMiniCalendar = () => {
        setIsMiniCalendarVisible(false)
    }

    const openKeyboardModal = () => {
        setKeyboardModal(true)
    }

    const closeKeyboardModal = () => {
        setKeyboardModal(false)
    }

    // Login Menu outside-click, close-menu use-effect
    useEffect(() => {
        const checkIfClickedOutside = e => {
        // If the menu is open and the clicked target is not within the menu, then close the menu
        if (isMiniCalendarVisible && miniCalenderRef.current && !miniCalenderRef.current.contains(e.target)) {
            setIsMiniCalendarVisible(false)
        }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMiniCalendarVisible])

    //to close keyboard modal when clicking outside of it
    useEffect(() => {
        const checkIfClickedOutside = e => {
          if (keyboardModal && keyboardModalRef.current && !keyboardModalRef.current.contains(e.target)) {
            setKeyboardModal(false)
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [keyboardModal])

    //to close show rules modal when clicking outside of it
    useEffect(() => {
        const checkIfClickedOutside = e => {
          if (showHouseRules && houseRulesModalRef.current && !houseRulesModalRef.current.contains(e.target)) {
            setShowHouseRules(false)
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [showHouseRules])

    //to close show safety info modal when clicking outside of it
    useEffect(() => {
        const checkIfClickedOutside = e => {
          if (showMoreSafety && safetyModalRef.current && !safetyModalRef.current.contains(e.target)) {
            setShowMoreSafety(false)
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [showMoreSafety])

    //to close show cancellation info modal when clicking outside of it
    useEffect(() => {
        const checkIfClickedOutside = e => {
          if (showCancellation && cancellationModalRef.current && !cancellationModalRef.current.contains(e.target)) {
            setShowCancellation(false)
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [showCancellation])

    // Disables vertical scroll-bar when Login/Language window is visible
    useEffect(() => {
        showHouseRules || showMoreSafety || showCancellation || showAllAmenities || keyboardModal
          ? (document.body.parentElement.style.overflowY = "clip")
          : (document.body.parentElement.style.overflowY = "auto");
      }, [showHouseRules, showMoreSafety, showCancellation, showAllAmenities, keyboardModal]);

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
                nightlyRate,
                openAmenities,
                closeAmenities,
                showAllAmenities,
                setDateRange,
                dateRange,
                emptyCalendar,
                isMiniCalendarVisible,
                openMiniCalendar,
                closeMiniCalendar,
                miniCalenderRef,
                convertDateObjToStr,
                openKeyboardModal,
                closeKeyboardModal,
                keyboardModal,
                keyboardModalRef,
                cancellationModalRef,
                houseRulesModalRef,
                safetyModalRef,
                propertyLocation
            }}>
            {children}
        </HostContext.Provider>
    )
}

export default HostContext;
