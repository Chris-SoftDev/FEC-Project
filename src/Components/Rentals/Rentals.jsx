import RentalHeader from './RentalHeader';
import RentalDescription from './RentalDescription';
import RentalAmenities from './RentalAmenities';
import RentalCalendar from './RentalCalendar';
import RentalModal from './RentalModal';
import './Rentals.css';

function Rentals() {

    return ( 
        <>
            <div className='top-rental-content-container'>
                <RentalHeader />
            </div>
            <div className='bottom-rental-content-container'>
                <div className="rental-bottom-left-pane-content-container">
                    <div className="rental-description-container">
                        <RentalDescription />
                    </div>
                    <div className="rental-amenities-container">
                        <RentalAmenities />
                    </div>
                    <div className="rental-calendar-container">
                        <RentalCalendar />
                    </div>
                </div>
                <div className="rental-bottom-right-pane-content-container">
                    <RentalModal />
                </div>       
            </div>
        </>
    );
}

export default Rentals;