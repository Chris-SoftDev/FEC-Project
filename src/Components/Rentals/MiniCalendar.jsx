import { useContext } from 'react'; 
import HostContext from '../../Context/HostContext';
import { DayPicker } from 'react-day-picker'
import { format, differenceInDays } from 'date-fns'
import './MiniCalendar.css'

function MiniCalendar() {
    const { miniCalenderRef, closeMiniCalendar } = useContext(HostContext)
    const { dateRange, setDateRange, emptyCalendar } = useContext(HostContext)

    const formattedFromDate = dateRange.from ? format(dateRange.from, 'MMM d, yyyy') : '';
    const numDays = dateRange.from && dateRange.to ? differenceInDays(dateRange.to, dateRange.from) + 1 : 0; 

    const modifiers = {
        from: dateRange.from,
        to: dateRange.to,
    };


    return ( 
        <div className="mini-calendar-modal-container" ref={miniCalenderRef}>
            <div className="mini-calendar-modal-header">
                <div className="mini-calendar-modal-header-select-dates-container">
                    <div className='number-of-nights'>
                        {dateRange.from && dateRange.to ? `${numDays} nights in Boise` : 'Select dates'}
                    </div>
                    <div className='date-range'>
                        {dateRange.from && dateRange.to ?
                        `${formattedFromDate} - ${format(dateRange.to, 'MMM d, yyyy')}` :
                        'Minimum stay: 2 nights'}
                    </div>
                </div>
                <div className='mini-calendar-modal-dates'>   
                    <div className="mini-calendar-modal-dates-checkin">
                        <div className='mini-calendar-modal-dates-checkin-title'>CHECK-IN</div> 
                        <div className='mini-calendar-modal-dates-add-date'>Add date</div>
                    </div>
                    <div className="mini-calendar-modal-dates-checkout">
                        <div className='mini-calendar-modal-dates-checkout-title'>CHECKOUT</div> 
                        <div className='mini-calendar-modal-dates-add-date'>Add date</div>
                    </div>
                </div>
            </div>
            <div className="mini-calendar-modal-body">
                <div className='mini-calendar-container'>
                    <DayPicker
                        numberOfMonths={2} 
                        defaultMonth={new Date()} 
                        fromMonth={new Date()} // TODO: Needs to mirror on both calendars, Context state?
                        toDate={new Date(2023, 9)} // TODO: Needs to mirror on both calendars, Context state?
                        mode="range" //select multiple days
                        selected={dateRange}
                        onSelect={setDateRange}
                        modifiers={modifiers} 
                    />
                </div>
                <div className='mini-calendar-footer'>
                    <div className='mini-calendar-footer-keyboard-icon'>
                        <svg viewBox='0 0 32 32'>
                            <path d="M29 5a2 2 0 0 1 1.995 1.85L31 7v18a2 2 0 0 1-1.85 1.995L29 27H3a2 2 0 0 1-1.995-1.85L1 25V7a2 2 0 0 1 1.85-1.995L3 5zm0 2H3v18h26zm-8 13v2H11v-2zm3-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm16-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                        </svg>
                    </div>
                    <div className='mini-calendar-footer-clear-dates'>
                        <button onClick={emptyCalendar}>Clear dates</button>
                        <div id="mini-calender-close-btn" onClick={closeMiniCalendar}>Close</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiniCalendar;