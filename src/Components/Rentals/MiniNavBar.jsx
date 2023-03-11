import { useContext } from 'react';
import MiniNavContext from '../../Context/MiniNavContext';
import './MiniNavBar.css'

function MiniNavBar() {
    const { scrollToPhotos, scrollToAmenities, scrollToReviews, scrollToLocation } = useContext(MiniNavContext)

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
            </div>
        </div>
     );
}

export default MiniNavBar;