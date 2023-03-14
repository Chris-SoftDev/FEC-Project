import { useState, useContext, useEffect, useRef } from 'react'; 
import { DayPicker } from 'react-day-picker'
import { format, differenceInDays, parse } from 'date-fns'
import HostContext from '../../Context/HostContext';
import './MiniCalendar.css'

function MiniCalendar() {
    const miniCalenderHeaderRef = useRef()
    const { dateRange, setDateRange, emptyCalendar, convertDateObjToStr, openKeyboardModal, miniCalenderRef, closeMiniCalendar, disableDays } = useContext(HostContext)

    const [checkInDate, setCheckInDate] = useState('')
    const [checkOutDate, setCheckOutDate] = useState('')

    const formattedFromDate = dateRange.from ? format(dateRange.from, 'MMM d, yyyy') : '';
    const numNights = dateRange.from && dateRange.to ? differenceInDays(dateRange.to, dateRange.from) : 0; 

    const modifiers = {
        from: dateRange.from,
        to: dateRange.to,
    };

    const updateCheckInDate = (event) => {
        setCheckInDate(event.target.value)
    }

    const handleCheckInDate = (event) => {
        const regex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!regex.test(event.target.value)) {
            console.log('not valid date')
            return;
        }
        const fromDate = parse(event.target.value, 'P', new Date());
        setDateRange({ from: fromDate, to: dateRange.to });
    }

    const updateCheckOutDate = (event) => {
        setCheckOutDate(event.target.value)
    }

    const handleCheckOutDate = (event) => {
        const regex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!regex.test(event.target.value)) {
            console.log('not valid date')
            return;
        }
        const toDate = parse(event.target.value, 'P', new Date());
        setDateRange({ from: dateRange.from, to: toDate });
    }

    const clearDates = () => {
        setCheckInDate('')
        setCheckOutDate('')
    }

    const clearCheckOutDate = () => {
        setCheckOutDate('')
        setDateRange({from: dateRange.from, to: ''})
    }

    useEffect(() => {
        if(dateRange.from != '') {
            setCheckInDate(convertDateObjToStr(dateRange.from))
        }
              
        if(dateRange.to != '' && dateRange.to != undefined) {
            setCheckOutDate(convertDateObjToStr(dateRange.to))
        }

    }, [dateRange]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          if (!entry.isIntersecting) {
            closeMiniCalendar()
          }
        });
        observer.observe(miniCalenderHeaderRef.current);
    }, []);

    return ( 
        <div className="mini-calendar-modal-container" ref={miniCalenderRef}>
            <div className="mini-calendar-modal-header" ref={miniCalenderHeaderRef}>
                <div className="mini-calendar-modal-header-select-dates-container">
                    <div className='number-of-nights'>
                        {dateRange.from && dateRange.to ? `${numNights} nights in Boise` : 'Select dates'}
                    </div>
                    <div className='date-range'>
                        {dateRange.from && dateRange.to ?
                        `${formattedFromDate} - ${format(dateRange.to, 'MMM d, yyyy')}` :
                        'Minimum stay: 2 nights'}
                    </div>
                </div>
                <div className='mini-calendar-modal-dates'>   
                    <div className="mini-calendar-modal-dates-checkin">
                        <div className="mini-calendar-modal-dates-checkin-details">
                            <div className='mini-calendar-modal-dates-checkin-title'>CHECK-IN</div> 
                            <div className='mini-calendar-modal-dates-from-date-container'>
                                <input type="text" name="from-date" id="mini-calendar-from-date" placeholder='Add date' value={checkInDate} onChange={updateCheckInDate} 
                                onFocus={(event) => {event.target.placeholder = 'MM/DD/YYYY'}}
                                onBlur={(event) => {
                                    event.target.placeholder = 'Add date';
                                    handleCheckInDate(event)
                                }}                            
                            />
                            </div>
                        </div>
                        <div className="mini-calendar-modal-dates-checkin-remove-date-btn">
                            <button onClick={() => {
                                clearDates()
                                emptyCalendar()
                            }}
                                style={(dateRange.from != "") ? {visibility: 'visible'} : {visibility: 'hidden'}}
                            >
                                <svg viewBox='0 0 32 32'>
                                    <path d="m6 6 20 20"></path>
                                    <path d="m26 6-20 20"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="mini-calendar-modal-dates-checkout" style={(dateRange.from != "") ? {backgroundColor: '#fff', borderRadius: '8px'} : {backgroundColor: '#f7f7f7', borderRadius: '8px'}}>
                        <div className="mini-calendar-modal-dates-checkout-details">
                            <div className='mini-calendar-modal-dates-checkout-title' style={(dateRange.from != "") ? {color: '#000'} : {color: '#dddfe5'}}>CHECKOUT</div> 
                            <div className='mini-calendar-modal-dates-to-date-container'>
                                <input type="text" name="to-date" id="mini-calendar-to-date" placeholder='Add date' value={checkOutDate} onChange={updateCheckOutDate}
                                    onFocus={(event) => {event.target.placeholder = 'MM/DD/YYYY'}}
                                    onBlur={(event) => {
                                        event.target.placeholder = 'Add date';
                                        handleCheckOutDate(event)
                                    }}
                                    disabled={(dateRange.from != "") ? false : true} 
                                    style={(dateRange.from != "") ? {color: '#000', backgroundColor: '#fff'} : {color: '#dddfe5', backgroundColor: '#f7f7f7'}}
                                />
                            </div>
                        </div>
                        <div className="mini-calendar-modal-dates-checkout-remove-date-btn">
                            <button onClick={clearCheckOutDate} style={(dateRange.to != "" && dateRange.to != undefined) ? {visibility: 'visible'} : {visibility: 'hidden'}}>
                                <svg viewBox='0 0 32 32'>
                                    <path d="m6 6 20 20"></path>
                                    <path d="m26 6-20 20"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mini-calendar-modal-body">
                <div className='mini-calendar-container'>
                    <DayPicker
                        numberOfMonths={2} 
                        defaultMonth={new Date()} 
                        fromMonth={new Date()} 
                        toDate={new Date(2023, 9)} 
                        mode="range" 
                        selected={dateRange}
                        onSelect={setDateRange}
                        modifiers={modifiers} 
                        disabled={disableDays}
                    />
                </div>
                <div className='mini-calendar-footer'>
                    <div className='mini-calendar-footer-keyboard-icon' onClick={openKeyboardModal}>
                        <svg viewBox='0 0 32 32'>
                            <path d="M29 5a2 2 0 0 1 1.995 1.85L31 7v18a2 2 0 0 1-1.85 1.995L29 27H3a2 2 0 0 1-1.995-1.85L1 25V7a2 2 0 0 1 1.85-1.995L3 5zm0 2H3v18h26zm-8 13v2H11v-2zm3-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm16-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                        </svg>
                    </div>
                    <div className='mini-calendar-footer-clear-dates'>
                        <button onClick={() => {
                            clearDates()
                            emptyCalendar() 
                        }}>Clear dates</button>
                        <div id="mini-calender-close-btn" onClick={closeMiniCalendar}>Close</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiniCalendar;