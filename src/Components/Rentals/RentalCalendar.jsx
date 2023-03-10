import { useContext } from 'react';
import { HostContext } from '../../Context/HostContext'
import { DayPicker } from 'react-day-picker'
import { format, differenceInDays } from 'date-fns'
import 'react-day-picker/dist/style.css';
import './RentalCalendar.css';


function RentalCalendar() {
    const { range, setRange, numberOfNights, setNumberOfNights } = useContext(HostContext)
    const handleResetClick = () => setRange([]);
    const defaultMonth =new Date(2023,2) //start of calendar

    const formattedFromDate = range.from ? format(range.from, 'MMM d, yyyy') : '';
    const numDays = range.from && range.to ? differenceInDays(range.to, range.from) + 1 : 0;
    setNumberOfNights(numDays)

    console.log(range.from)
    console.log(range.to)

    const modifiers = {
        from: range.from,
        to: range.to,
      };


    return (

        <div className='calendar-main-container'>
            <div className='calendar-title'>
                <div className='number-of-nights'>
                    {numberOfNights ? `${numberOfNights} nights in Boise` : 'Select check-in date'}
                </div>
                <div className='date-range'>
                    {range.from && range.to ?
                    `${formattedFromDate} - ${format(range.to, 'MMM d, yyyy')}` :
                    'Add your travel dates for exact pricing'}
                </div>
            </div>
            <div className='calendar-container'>
                {/* <p>Selected range: {range.from ? format(range.from, 'P') : ''} - {range.to ? format(range.to, 'P') : ''}</p>
                <p>Number of days: {numDays}</p>
                <p>Selected range: {formattedFromDate} - {range.to ? format(range.to, 'MMMM d, yyyy') : ''}</p> */}
                
                <DayPicker
                    numberOfMonths={2}
                    defaultMonth={defaultMonth}
                    fromMonth={defaultMonth}
                    toDate={new Date(2023, 9)} //after 10(october) which is november
                    mode="range" //select mulitple days
                    selected={range}
                    onSelect={setRange}
                    modifiers={modifiers} 
                />
            </div>
            <div className='calendar-footer'>
                <div className='keyboard-icon'>
                    <svg viewBox='0 0 32 32'>
                        <path d="M29 5a2 2 0 0 1 1.995 1.85L31 7v18a2 2 0 0 1-1.85 1.995L29 27H3a2 2 0 0 1-1.995-1.85L1 25V7a2 2 0 0 1 1.85-1.995L3 5zm0 2H3v18h26zm-8 13v2H11v-2zm3-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm16-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                    </svg>
                </div>
                <div className='clear-dates'>
                    <button onClick={handleResetClick}>Clear dates</button>
                </div>
            </div>
        </div>
    );
}

export default RentalCalendar;