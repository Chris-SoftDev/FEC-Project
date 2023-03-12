import { useContext, useState, useEffect } from 'react';
import HostContext from '../../Context/HostContext';
import ServiceDog from './ServiceDog';
import './GuestQty.css'

function GuestQty() {
    const { 
        guestQtyModalRef,
        isServiceDogVisible,
        openServiceDog, 
        closeGuestQty, 
        guestQtyObj, 
        increaseAdultGuests, 
        decreaseAdultGuests, 
        increaseChildrenGuests,
        decreaseChildrenGuests,
        increaseInfantGuests,
        decreaseInfantGuests,
        increasePetGuests,
        decreasePetGuests,
        rulesData 
    } = useContext(HostContext)

    return (
        <> 
            <div className="guest-qty-modal-container" ref={guestQtyModalRef}>
                <div className="guest-qty-category-container">
                    <div className='guest-qty-category-description-container'>
                        <div className="guest-qty-description-title">Adults</div>
                        <div className="guest-qty-description-details">Age 13+</div>
                    </div>
                    <div className='guest-qty-category-controls-container'>
                        <div className='qty-decrement-btn-container'>
                            <button onClick={decreaseAdultGuests} disabled={(guestQtyObj.adults === 1) ? true : false}>
                                <i className="fa fa-minus"></i>
                            </button>
                        </div>
                        <div className='category-qty'>{guestQtyObj.adults}</div>
                        <div className='qty-increment-btn-container' >
                            <button onClick={increaseAdultGuests} disabled={((guestQtyObj.adults + guestQtyObj.children) == rulesData.max_guest) ? true : false}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="guest-qty-category-container">
                    <div className='guest-qty-category-description-container'>
                        <div className="guest-qty-description-title">Children</div>
                        <div className="guest-qty-description-details">Age 2-12</div>
                    </div>
                    <div className='guest-qty-category-controls-container'>
                        <div className='qty-decrement-btn-container'>
                            <button onClick={decreaseChildrenGuests} disabled={(guestQtyObj.children === 0) ? true : false}>
                                <i className="fa fa-minus"></i>
                            </button>
                        </div>
                        <div className='category-qty'>{guestQtyObj.children}</div>
                        <div className='qty-increment-btn-container'>
                            <button onClick={increaseChildrenGuests} disabled={((guestQtyObj.adults + guestQtyObj.children) == rulesData.max_guest) ? true : false}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="guest-qty-category-container">
                    <div className='guest-qty-category-description-container'>
                        <div className="guest-qty-description-title">Infants</div>
                        <div className="guest-qty-description-details">Under 2</div>
                    </div>
                    <div className='guest-qty-category-controls-container'>
                        <div className='qty-decrement-btn-container'>
                            <button onClick={decreaseInfantGuests} disabled={(guestQtyObj.infants === 0) ? true : false}>
                                <i className="fa fa-minus"></i>
                            </button>
                        </div>
                        <div className='category-qty'>{guestQtyObj.infants}</div>
                        <div className='qty-increment-btn-container'>
                            <button onClick={increaseInfantGuests} disabled={(guestQtyObj.infants === 5) ? true : false}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    </div>
                <div className="guest-qty-category-container">
                    <div className='guest-qty-category-description-container'>
                        <div className="guest-qty-description-title">Pets</div>
                        <div className="guest-qty-description-details" id='guest-qty-service-animal-link' onClick={openServiceDog}>Bringing a service animal?</div>
                    </div>
                    <div className='guest-qty-category-controls-container'>
                        <div className='qty-decrement-btn-container'>
                            <button onClick={decreasePetGuests} disabled={(guestQtyObj.pets === 0 || (!rulesData.pets)) ? true : false}>
                                <i className="fa fa-minus"></i>
                            </button>
                        </div>
                        <div className='category-qty'>{guestQtyObj.pets}</div>
                        <div className='qty-increment-btn-container'>
                            <button onClick={increasePetGuests} disabled={(guestQtyObj.pets === 5 || (!rulesData.pets)) ? true : false}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="guest-qty-footer-container">
                    <div className='guest-qty-footer-notes'>This place has a maximum of {rulesData.max_guest} guests, not including infants. 
                        {(rulesData.pets) ? ' If your bringing more than 2 pets, please let your host know.' : " Pets aren't allowed"}
                    </div>
                    <div className="guest-qty-footer-btn-container">
                        <div id="guest-qty-footer-close-btn" onClick={closeGuestQty}>Close</div>
                    </div>
                </div>
            </div>
            {isServiceDogVisible && <ServiceDog />}
        </>
    );
}

export default GuestQty;