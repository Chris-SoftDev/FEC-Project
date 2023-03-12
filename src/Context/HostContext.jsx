import { createContext, useState, useEffect, useRef } from "react";

const HostContext = createContext()

export const HostProvider = ({ children }) => {
    const miniCalenderRef = useRef()
    const guestQtyModalRef = useRef()
    const guestQtyBtnRef = useRef()
    const serviceDogRef = useRef()
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
    const [amenities, setAmenities] = useState([])
    const [dateRange, setDateRange] = useState({from: "", to: ""}) //dates in Mar 14, 2023 format
    const [nightlyRate, setNightlyRate] = useState()
    const [isMiniCalendarVisible, setIsMiniCalendarVisible] = useState(false)
    const [keyboardModal, setKeyboardModal] = useState(false)
    const [isGuestQtyVisible, setIsGuestQtyVisible] = useState(false)
    const [isServiceDogVisible, setIsServiceDogVisible] =  useState(false);
    const [guestQtyObj, setGuestQtyObj] = useState({
        adults: 1,
        children: 0,
        infants: 0,
        pets: 0
    })
    
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
            setAmenities(host[0].amenities)
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

    const toggleGuestQty = () => {
        setIsGuestQtyVisible(!isGuestQtyVisible)
    }

    const closeGuestQty = () => {
        setIsGuestQtyVisible(false)
    }

    // Service Dog Modal Functions
    const openServiceDog = () => {
        setIsServiceDogVisible(true)
    }

    const closeServiceDog = () => {
        setIsServiceDogVisible(false)
    }

    //Guest Qty Functions
    const increaseAdultGuests = () => {
        setGuestQtyObj({
            ...guestQtyObj,
            adults: guestQtyObj.adults + 1
        })
    }
    
    const decreaseAdultGuests = () => {
        setGuestQtyObj({
            ...guestQtyObj,
            adults: guestQtyObj.adults - 1
        })
    }

    const increaseChildrenGuests = () => {
        setGuestQtyObj({
            ...guestQtyObj,
            children: guestQtyObj.children + 1
        })
    }
    
    const decreaseChildrenGuests = () => {
        setGuestQtyObj({
            ...guestQtyObj,
            children: guestQtyObj.children - 1
        })
    }

    const increaseInfantGuests = () => {
        setGuestQtyObj({
            ...guestQtyObj,
            infants: guestQtyObj.infants + 1
        })
    }
    
    const decreaseInfantGuests = () => {
        setGuestQtyObj({
            ...guestQtyObj,
            infants: guestQtyObj.infants - 1
        })
    }

    const increasePetGuests = () => {
        setGuestQtyObj({
            ...guestQtyObj,
            pets: guestQtyObj.pets + 1
        })
    }
    
    const decreasePetGuests = () => {
        setGuestQtyObj({
            ...guestQtyObj,
            pets: guestQtyObj.pets - 1
        })
    }

    // Calendar Functions
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

    // Mini Calendar Menu outside-click, close-menu use-effect
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

    // Guest Qty Menu outside-click, close-menu use-effect
    useEffect(() => {
        const checkIfClickedOutside = e => {
        // If the menu is open and the clicked target is not within the menu, then close the menu
        if (isGuestQtyVisible && guestQtyModalRef.current && guestQtyBtnRef.current && !guestQtyModalRef.current.contains(e.target) && !guestQtyBtnRef.current.contains(e.target)) {
            setIsGuestQtyVisible(false)
        }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isGuestQtyVisible])

     // Service Dog Menu outside-click, close-menu use-effect
     useEffect(() => {
        const checkIfClickedOutside = e => {
        // If the menu is open and the clicked target is not within the menu, then close the menu
        if (isServiceDogVisible && serviceDogRef.current && !serviceDogRef.current.contains(e.target)) {
            setIsServiceDogVisible(false)
        }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isServiceDogVisible])


    // Disables vertical scroll-bar when windows are visible
    useEffect(() => {
        showHouseRules || showMoreSafety || showCancellation || showAllAmenities || isServiceDogVisible
          ? (document.body.parentElement.style.overflowY = "clip")
          : (document.body.parentElement.style.overflowY = "auto");
      }, [showHouseRules, showMoreSafety, showCancellation, showAllAmenities, isServiceDogVisible]);

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
                guestQtyBtnRef,
                guestQtyModalRef,
                isGuestQtyVisible,
                toggleGuestQty,
                closeGuestQty,
                increaseAdultGuests,
                decreaseAdultGuests,
                increaseChildrenGuests,
                decreaseChildrenGuests,
                increaseInfantGuests,
                decreaseInfantGuests,
                increasePetGuests,
                decreasePetGuests,
                guestQtyObj,
                convertDateObjToStr,
                openKeyboardModal,
                closeKeyboardModal,
                keyboardModal,
                serviceDogRef,
                openServiceDog,
                closeServiceDog,
                isServiceDogVisible,
                amenities
            }}>
            {children}
        </HostContext.Provider>
    )
}

export default HostContext;
