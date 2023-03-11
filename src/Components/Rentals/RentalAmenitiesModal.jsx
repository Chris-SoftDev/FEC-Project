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
                            <div className="modal-header">
                                <h3>What this place offers</h3>
                            </div>
                            <div className="amen-categories">
                                Scenic views
                            </div>
                                <div className="amen-modal-content">
                                    Valley view
                                </div>
                                <div className="amen-modal-content">
                                    Mountain view
                                </div>
                            <div className="amen-categories">
                                Bathroom
                            </div>
                                <div className="amen-modal-content">
                                    Bathtub
                                </div>
                                <div className="amen-modal-content">
                                    Hair dryer
                                </div>
                                <div className="amen-modal-content">
                                    Shampoo
                                </div>
                                <div className="amen-modal-content">
                                    Hot water
                                </div>
                            <div className="amen-categories">
                                Bedroom and Laundry
                            </div>
                                <div className="amen-modal-content">
                                    Free washer - In unit
                                </div>
                                <div className="amen-modal-content">
                                    Free dryer - In unit
                                </div>
                                <div className="amen-modal-content">
                                    <div className="amen-modal-content">
                                        Essentials
                                    </div>
                                    <div className="amen-modal-content-sub">
                                        Towels, bed sheets, soap, and toilet paper
                                    </div>
                                </div>
                                <div className="amen-modal-content">
                                    Hangers
                                </div>
                                <div className="amen-modal-content">
                                    Bed linens
                                </div>
                                <div className="amen-modal-content">
                                    Extra pillows and blankets
                                </div>
                                <div className="amen-modal-content">
                                    Iron
                                </div>
                            <div className="amen-categories">
                                Entertainment
                            </div>
                                <div className="amen-modal-content">
                                    HDTV with Hulu, Amazon Prime Video, Apple TV, HBO Max, Netflix, Roku
                                </div>
                                <div className="amen-modal-content">
                                    Game console
                                </div>
                            <div className="amen-categories">
                                Heating and cooling
                            </div>
                                <div className="amen-modal-content">
                                    Window AC unit
                                </div>
                                <div className="amen-modal-content">
                                    AC - split type ductless system
                                </div>
                                <div className="amen-modal-content">
                                    Indoor fireplace: pellet stove
                                </div>
                                <div className="amen-modal-content">
                                    Heating
                                </div>
                            <div className="amen-categories">
                                Home safety
                            </div>
                                <div className="amen-modal-content">
                                    Security cameras on property
                                </div>
                                <div className="amen-modal-content">
                                    Smoke alarm
                                </div>
                                <div className="amen-modal-content">
                                    Carbon monoxide alarm
                                </div>
                                <div className="amen-modal-content">
                                    Fire extinguisher
                                </div>
                                <div className="amen-modal-content">
                                    First aid kit
                                </div>
                            <div className="amen-categories">
                                Internet and Office
                            </div>
                                <div className="amen-modal-content">
                                    Wifi
                                </div>
                                <div className="amen-modal-content">
                                    Dedicated workspace
                                </div>
                            <div className="amen-categories">
                                Kitchen and dining
                            </div>
                                <div className="amen-modal-content">
                                    Kitchen
                                </div>
                                <div className="amen-modal-content">
                                    Refrigerator
                                </div>
                                <div className="amen-modal-content">
                                    Microwave
                                </div>
                                <div className="amen-modal-content">
                                    Cooking basics
                                </div>
                                <div className="amen-modal-content">
                                    Dishes and silverware
                                </div>
                                <div className="amen-modal-content">
                                    Diswasher
                                </div>
                                <div className="amen-modal-content">
                                    Stove
                                </div>
                                <div className="amen-modal-content">
                                    Oven
                                </div>
                                <div className="amen-modal-content">
                                    Coffee maker
                                </div>
                                <div className="amen-modal-content">
                                    Baking sheet
                                </div>
                                <div className="amen-modal-content">
                                    Barbeque utensils
                                </div>
                                <div className="amen-modal-content">
                                    Bread maker
                                </div>
                            <div className="amen-categories">
                                Location features
                            </div>
                                <div className="amen-modal-content">
                                    Private entrance
                                </div>
                            <div className="amen-categories">
                                Outdoor
                            </div>
                                <div className="amen-modal-content">
                                    Private patio or balcony
                                </div>
                                <div className="amen-modal-content">
                                    Private backyard - Not fully fenced
                                </div>
                                <div className="amen-modal-content">
                                    Outdoor furniture
                                </div>
                                <div className="amen-modal-content">
                                    BBQ grill
                                </div>
                            <div className="amen-categories">
                                Parking and facilities
                            </div>
                                <div className="amen-modal-content">
                                    Free parking on premises
                                </div>
                                <div className="amen-modal-content">
                                    Private hot tub
                                </div>
                            <div className="amen-categories">
                                Services
                            </div>
                                <div className="amen-modal-content">
                                    Pets allowed
                                </div>
                                <div className="amen-modal-content">
                                    Long term stays allowed
                                </div>
                                <div className="amen-modal-content">
                                    Self check-in
                                </div>
                                <div className="amen-modal-content">
                                    Smart lock
                                </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}