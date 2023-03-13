import { useContext, useState } from 'react';
import { differenceInDays } from 'date-fns';
import HostContext from '../../Context/HostContext';
import ReviewContext from '../../Context/ReviewContext'
import MiniNavContext from '../../Context/MiniNavContext';
import MiniNavBar from './MiniNavBar';
import MiniCalendar from './MiniCalendar';
import GuestQty from './GuestQty';
import './RentalModal.css';

function RentalModal() {
    const { isMiniNavVisible, rentalModalFooterRef } = useContext(MiniNavContext)
    const { isMiniCalendarVisible, isReserveReady, openMiniCalendar, nightlyRate, cleaningFee, serviceFee, dateRange, toggleGuestQty, isGuestQtyVisible, convertDateObjToStr, guestQtyBtnRef, guestQtyObj } = useContext(HostContext)
    const { getReviews, openAllRev, totalAvg } = useContext(ReviewContext)

    const guestQtyStr = (obj) => {
        let resultStr = '';
        if((obj.adults + obj.children) > 1) {
            resultStr = `${obj.adults + obj.children} guests`
        } else {resultStr = '1 guest'}

        if(obj.infants === 1) {
            resultStr += `, ${obj.infants} infant`
        } else if (obj.infants > 1) {
            resultStr += `, ${obj.infants} infants`
        }

        if(obj.pets === 1) {
            resultStr += `, ${obj.pets} pet`
        } else if (obj.pets > 1) {
            resultStr += `, ${obj.pets} pets`
        }
    
        return resultStr
    }
    
    function amountOfReviews(rev) {
        for (let i = 0; i < rev.length; i++) {
        const element = rev.length;
        return element;
        }
    }
    
    const totalReviews = amountOfReviews(getReviews);
    const ratingAvg = Math.round(totalAvg * 100) / 100
    const numNights = dateRange.from && dateRange.to ? differenceInDays(dateRange.to, dateRange.from) : 0;

    return ( 
        <>
            <div className="rental-modal-outer-container">
                <div className="rental-modal-container">
                    <div className="rental-modal-content-container">
                        <div className="rental-modal-content-header">
                            <div className="rental-modal-content-header-pricing">
                                <span id='header-modal-pricing-value'>${nightlyRate}</span>
                                <span id='header-modal-pricing-label'>night</span>
                            </div>
                            <div className="rental-modal-content-header-reviews">
                                <div className="rental-modal-rating-star">
                                    <svg viewBox='0 0 32 32'>
                                        <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path>
                                    </svg>
                                </div>
                                <div className="rental-modal-rating-number">{ratingAvg} ·</div>
                                <button className='rental-modal-rating-reviews' onClick={openAllRev}>{totalReviews} reviews</button>
                            </div>
                        </div>
                        <div className="rental-modal-content-body">
                            <div className='rental-modal-dates'>
                                <button id="rental-modal-dates-btn" onClick={openMiniCalendar}>
                                    <div className="rental-modal-dates-checkin">
                                        <div className='rental-modal-dates-checkin-title'>CHECK-IN</div> 
                                        <div className='rental-modal-dates-add-date'>{(dateRange.from != "") ? convertDateObjToStr(dateRange.from) : 'Add date'}</div>
                                    </div>
                                    <div className="rental-modal-dates-checkout">
                                        <div className='rental-modal-dates-checkout-title'>CHECKOUT</div> 
                                        <div className='rental-modal-dates-add-date'>{(dateRange.to != "" && dateRange.to != undefined) ? convertDateObjToStr(dateRange.to) : 'Add date'}</div>
                                    </div>
                                </button>
                            </div>
                            <div className='rental-modal-guests' ref={guestQtyBtnRef}>
                                <button onClick={toggleGuestQty}>
                                    <div className="rental-modal-guests-title">
                                        <div>GUESTS</div>
                                        <div className='rental-modal-guests-quantity'>{guestQtyStr(guestQtyObj)}</div>
                                    </div>
                                    <div className="rental-modal-guests-icon">
                                        {isGuestQtyVisible ? <i className="fa fa-chevron-up"></i> : <i className="fa fa-chevron-down"></i>}
                                    </div>
                                </button>
                                {isGuestQtyVisible && <GuestQty />}
                            </div>
                        </div>
                        {(isReserveReady) ? (
                            <>
                                <div className="rental-modal-content-footer" ref={rentalModalFooterRef}>
                                    <button type='submit'>Reserve</button>
                                </div>
                                <div className="rental-modal-reserve-fees-container">
                                    <div className='rental-modal-reserve-fees-header'>You won't be charged yet</div>
                                    <div className="rental-modal-reserve-fees-charges-container">
                                        <div className="rental-modal-reserve-fees-charges-category">${nightlyRate} x {numNights} nights</div>
                                        <div className='rental-modal-reserve-fees-charges'>${nightlyRate * numNights}</div>
                                    </div>
                                    <div className="rental-modal-reserve-fees-charges-container">
                                        <div className="rental-modal-reserve-fees-charges-category">Cleaning Fee</div>
                                        <div className='rental-modal-reserve-fees-charges'>${cleaningFee}</div>
                                    </div>
                                    <div className="rental-modal-reserve-fees-charges-container">
                                        <div className="rental-modal-reserve-fees-charges-category">Groundbnb service fee</div>
                                        <div className='rental-modal-reserve-fees-charges'>${serviceFee}</div>
                                    </div>
                                </div>
                                <div className="rental-modal-reserve-total-container">
                                    <div>Total before taxes</div>
                                    <div>${(nightlyRate * numNights) + cleaningFee + serviceFee}</div>
                                </div>
                            </>
                        ) : (
                            <div className="rental-modal-content-footer" ref={rentalModalFooterRef}>
                                <button onClick={openMiniCalendar}>Check availability</button>
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="rental-modal-reporting-container">
                    <div className="rental-modal-reporting">
                        <button>
                            <div className="reporting-btn-icon">
                                <svg viewBox='0 0 32 32'>
                                    <path d="M28 6H17V4a2 2 0 0 0-2-2H3v28h2V18h10v2a2 2 0 0 0 2 2h11l.115-.006a1 1 0 0 0 .847-1.269L27.039 14l1.923-6.724A1 1 0 0 0 28 6z"></path>
                                </svg>
                            </div>
                            Report this listing
                        </button>
                    </div>
                </div>
                {isMiniCalendarVisible && <MiniCalendar />}
            </div>
            {(isMiniNavVisible) && <MiniNavBar />}
        </>
    );
}

export default RentalModal;