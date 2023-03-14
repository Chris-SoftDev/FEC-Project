import { createContext, useState, useEffect, useRef } from "react";

const HostContext = createContext()

export const HostProvider = ({ children }) => {
    const miniCalenderRef = useRef()
    const guestQtyModalRef = useRef()
    const guestQtyBtnRef = useRef()
    const serviceDogRef = useRef()
    const keyboardModalRef = useRef()
    const houseRulesModalRef = useRef()
    const cancellationModalRef = useRef()
    const safetyModalRef = useRef()
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
    const [dateRange, setDateRange] = useState({from: "", to: ""})
    const [nightlyRate, setNightlyRate] = useState()
    const [cleaningFee, setCleaningFee] = useState()
    const [serviceFee, setServiceFee] = useState()
    const [isMiniCalendarVisible, setIsMiniCalendarVisible] = useState(false)
    const [keyboardModal, setKeyboardModal] = useState(false)
    const [propertyLocation, setPropertyLocation] = useState([])
    const [isGuestQtyVisible, setIsGuestQtyVisible] = useState(false)
    const [isServiceDogVisible, setIsServiceDogVisible] =  useState(false);
    const [isReserveReady, setIsReserveReady] = useState(false)
    const [daysBooked, setDaysBooked] = useState([])
    const [currentHostId, setCurrentHostId] = useState(1)  // TODO: Fixed data based on property selection
    const [currentPropertyId, setCurrentPropertyId] = useState(1) // TODO: Fixed data based on property selection
    const [guestQtyObj, setGuestQtyObj] = useState({
        adults: 1,
        children: 0,
        infants: 0,
        pets: 0
    })

    const fetchUrl = 'https://fec-project-production.up.railway.app';
    
    useEffect(() => {
        const fetchHostData = async () => {
            const response = await fetch(`${fetchUrl}/host/${currentHostId}`);
            const data = await response.json();
            setHostData(data[0].host_info);
            setCohostData(data[0].cohost_info)
        };
        
        fetchHostData();
    },[])

    useEffect(() => {
        const fetchPropertyData = async () => {
            const response = await fetch(`${fetchUrl}/property/${currentPropertyId}`);
            const data = await response.json();
            setSafetyData(data[0].safety)
            setRulesData(data[0].house_rules)
            setCancelData(data[0].cancellation_policy)
            setAdditionalRules(data[0].house_rules.additional_rules)
            setNightlyRate(data[0].nightly_rate)
            setPropertyLocation(data[0].location)
            setCleaningFee(data[0].cleaning_fee)
            setServiceFee(data[0].service_fee)
            setAmenities(data[0].amenities)
        };
        
        fetchPropertyData();
    },[]) 

    useEffect(() => {
        const fetchBookedDays = async () => {
            const response = await fetch(`${fetchUrl}/reservations/${currentPropertyId}`);
            const data = await response.json();
            setDaysBooked(data)
        };

        fetchBookedDays()
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

    // Service Dog Modal Functions
    const openServiceDog = () => {
        setIsServiceDogVisible(true)
    }
    
    const closeServiceDog = () => {
        setIsServiceDogVisible(false)
    }
    
    //Guest Qty Functions
    const toggleGuestQty = () => {
        setIsGuestQtyVisible(!isGuestQtyVisible)
    }

    const closeGuestQty = () => {
        setIsGuestQtyVisible(false)
    }

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

    // Reserve Menu Trigger when checkout date has a value
    useEffect(() => {
        if(dateRange.to) {
            setIsReserveReady(true)
        } else {
            setIsReserveReady(false)
        }
    }, [dateRange]);

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
        showHouseRules || showMoreSafety || showCancellation || showAllAmenities || isServiceDogVisible || keyboardModal
          ? (document.body.parentElement.style.overflowY = "clip")
          : (document.body.parentElement.style.overflowY = "auto");
      }, [showHouseRules, showMoreSafety, showCancellation, showAllAmenities, isServiceDogVisible, keyboardModal]);


        //maps over dates from data and places it in disabled dates on date picker component
    const disableDays = daysBooked.map((booking) => {
        const fromDate = new Date(booking.from_date);
        const toDate = new Date(booking.to_date);
        return {
            from: new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate()),
            to: new Date(toDate.getFullYear(), toDate.getMonth(), toDate.getDate())
        };
    });

    return (
        <HostContext.Provider 
            value ={{
                currentPropertyId,
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
                cleaningFee,
                serviceFee,
                openAmenities,
                closeAmenities,
                showAllAmenities,
                setDateRange,
                dateRange,
                emptyCalendar,
                isMiniCalendarVisible,
                isReserveReady,
                setIsReserveReady,
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
                keyboardModalRef,
                cancellationModalRef,
                houseRulesModalRef,
                safetyModalRef,
                propertyLocation,
                serviceDogRef,
                openServiceDog,
                closeServiceDog,
                isServiceDogVisible,
                amenities,
                daysBooked,
                setDaysBooked,
                disableDays
            }}>
            {children}
        </HostContext.Provider>
    )
}

export default HostContext;
