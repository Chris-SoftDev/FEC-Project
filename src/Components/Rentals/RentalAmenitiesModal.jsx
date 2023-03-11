import { useContext } from 'react'
import HostContext from '../../Context/HostContext';
import './RentalAmenitiesModal.css'

export default function RentalAmenitiesModal() {

    const { showAllAmenities, closeAmenities } = useContext(HostContext)

    return (
        <>
            {showAllAmenities && (
                <div className="modal-overlay">
                    <div className="amenities-modal-container">
                        <div className="amenities-modal">
                            <div className="amenities-close-btn" onClick={closeAmenities}>
                                <button>
                                <svg viewBox='0 0 32 32'>  
                                        <path d="m6 6 20 20"></path>
                                        <path d="m26 6-20 20"></path>
                                    </svg>
                                </button>
                            </div>
                            div.
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}