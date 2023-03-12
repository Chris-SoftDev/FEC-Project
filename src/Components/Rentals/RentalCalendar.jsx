import { useContext } from 'react';
import HostContext from '../../Context/HostContext'
import MiniNavContext from '../../Context/MiniNavContext';
import KeyboardModal from './KeyboardModal'
import { DayPicker } from 'react-day-picker'
import { format, differenceInDays } from 'date-fns'
import 'react-day-picker/dist/style.css';
import './RentalCalendar.css';



function RentalCalendar() {

    const { dateRange, setDateRange, emptyCalendar, openKeyboardModal, keyboardModal } = useContext(HostContext)
    const { calendarRef } = useContext(MiniNavContext)

    const defaultMonth =new Date(2023,2) //start of calendar
    const formattedFromDate = dateRange.from ? format(dateRange.from, 'MMM d, yyyy') : '';
    const numDays = dateRange.from && dateRange.to ? differenceInDays(dateRange.to, dateRange.from) + 1 : 0; 
    
    return (

        <div className='calendar-main-container' ref={calendarRef}>
            <div className='calendar-title'>
                <div className='number-of-nights'>
                    {dateRange.from && dateRange.to ? `${numDays} nights in Boise` : 'Select check-in date'}
                </div>
                <div className='date-range'>
                    {dateRange.from && dateRange.to ?
                    `${formattedFromDate} - ${format(dateRange.to, 'MMM d, yyyy')}` :
                    'Add your travel dates for exact pricing'}
                </div>
            </div>
            <div className='calendar-container'>
                <DayPicker
                    numberOfMonths={2} //two calendars mode
                    defaultMonth={defaultMonth} //start month of Calendar
                    fromMonth={defaultMonth} //start month of Calendar
                    toDate={new Date(2023, 9)} //last month of Calendars
                    mode="range" //select mulitple days
                    selected={dateRange} //this state is located in hostcontext
                    onSelect={setDateRange}
                    //modifiers={modifiers} 
                />
            </div>
            <div className='calendar-footer'>
                <div className='keyboard-icon' onClick={openKeyboardModal}>
                    <svg viewBox='0 0 32 32'>
                        <path d="M29 5a2 2 0 0 1 1.995 1.85L31 7v18a2 2 0 0 1-1.85 1.995L29 27H3a2 2 0 0 1-1.995-1.85L1 25V7a2 2 0 0 1 1.85-1.995L3 5zm0 2H3v18h26zm-8 13v2H11v-2zm3-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm16-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                    </svg>
                </div>
                <div className='clear-dates'>
                    <button onClick={emptyCalendar}>Clear dates</button>
                </div>
            </div>
            {keyboardModal && <KeyboardModal />}
        </div>
    );
}

export default RentalCalendar;
