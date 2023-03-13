import { useContext } from 'react';
import MiniNavContext from '../../Context/MiniNavContext';
import HostContext from '../../Context/HostContext';
import ReviewContext from '../../Context/ReviewContext';
import './MiniNavBar.css'

function MiniNavBar() {
    const { scrollToPhotos, scrollToAmenities, scrollToReviews, scrollToLocation, scrollToCalendar, isMiniNavReserveVisible } = useContext(MiniNavContext)
    const { nightlyRate, isReserveReady } = useContext(HostContext)
    const { getReviews, openAllRev, totalAvg } = useContext(ReviewContext)
    
    function amountOfReviews(rev) {
        for (let i = 0; i < rev.length; i++) {
        const element = rev.length;
        return element;
        }
    }
    
    const totalReviews = amountOfReviews(getReviews);
    const ratingAvg = Math.round(totalAvg * 100) / 100

    return ( 
        <div className="mini-navbar-container" id='mini-navbar-anchor'>
            <div className="mini-navbar-outer-container">
                <div className="mini-navbar-content-container">
                    <div className="mini-navbar-links">
                        <button onClick={scrollToPhotos}>Photos</button>
                        <button onClick={scrollToAmenities}>Amenities</button>
                        <button onClick={scrollToReviews}>Reviews</button>
                        <button onClick={scrollToLocation}>Location</button>
                    </div>
                </div>
                <div className="mini-navbar-reserve-container" id='mini-navbar-reserve-container' style={
                    isMiniNavReserveVisible ?
                    {visibility: 'hidden'} :
                    {visibility: 'visible'}
                }>
                    <div className="mini-navbar-reserve-rate">
                        <div className="mini-navbar-reserve-rate-pricing">
                            <span id='mini-navbar-reserve-rate-pricing-value'>${nightlyRate}</span>
                            <span id='mini-navbar-reserve-rate-pricing-label'>night</span>
                        </div>
                        <div className="mini-navbar-reserve-rate-reviews">
                            <div className="mini-navbar-reserve-rate-rating-star">
                                <svg viewBox='0 0 32 32'>
                                    <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path>
                                </svg>
                            </div>
                            <div className="mini-navbar-reserve-rate-rating-number">{ratingAvg} ·</div>
                            <button className='mini-navbar-reserve-rate-rating-reviews' onClick={openAllRev}>{totalReviews} reviews</button>
                        </div>
                        </div>
                    {isReserveReady ? (
                        <div className="mini-navbar-reserve-btn-container">
                            <div className="mini-navbar-reserve-btn">
                                <button type='submit'>Reserve</button>
                            </div>
                        </div>
                    ) : 
                    (
                        <div className="mini-navbar-reserve-btn-container">
                            <div className="mini-navbar-reserve-btn">
                                <button type='submit' onClick={scrollToCalendar}>Check availability</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
     );
}

export default MiniNavBar;