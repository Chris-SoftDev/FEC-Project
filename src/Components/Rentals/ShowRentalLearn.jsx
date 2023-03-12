import { useContext, useRef } from "react";
import RentalContext from '../../Context/RentalContext'
import "./ShowRentalLearn.css"



export default function ShowRentalLearn() {

    const { showRentalState, closeRental, miniLearnMoreRef } = useContext(RentalContext)
    return (
        <>
            {showRentalState && (
                <div className="modal-overlay" ref={miniLearnMoreRef} >
                    <div className='rule-modal-container'>
                        <div className='rules-modal'>
                            <div className='rules-close-btn'onClick={closeRental}>
                                <button>
                                    <svg viewBox='0 0 32 32'>  
                                        <path d="m6 6 20 20"></path>
                                        <path d="m26 6-20 20"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className='rules-content-container'>
                                <h2 className='airCover-title'>
                                    <img class="airCover-image" src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="AirCover"></img>
                                </h2>
                                <div className='learn-modal-title'>
                                    AirCover is comprehensive protection included for free with every booking. 
                                </div>
                                <div className='learn-modal-grid'>
                                    <div>
                                        <h3 className="learn-modal-grid-titles"> Booking Protection Guarantee</h3>
                                        <div className="learn-modal-grid-desc">In the unlikely event a Host needs to cancel your booking within 30 days of check-in, we'll find you a similar or better home, or we'll refund you.</div>
                                    </div>
                                    <div>
                                        <h3 className="learn-modal-grid-titles">Get-What-You-Booked-Guarantee</h3>
                                        <div className="learn-modal-grid-desc">If at any time during your stay you find your listing isn't as advertised--for example, the refrigerator stops working and your Host can't easily fix it, or it has fewer bedrooms than listed--you'll have three days to report it and we'll find you a similar or better home, or we'll refund you.</div>
                                    </div>
                                    <div>
                                        <h3 className="learn-modal-grid-titles">Check-In Guarantee</h3>
                                        <div className="learn-modal-grid-desc">If you can't check into your home and the Host cannot resolve the issue, we'll find you a similar or better home for the length of your original stay, or we'll refund you.</div>
                                    </div>
                                    <div>
                                        <h3 className="learn-modal-grid-titles">24-hour Safety Line</h3>
                                        <div className="learn-modal-grid-desc">IF you ever feel unsafe, you;ll get priority access to specially-trained safety agents, day or night.</div>
                                    </div>
                                </div>
                                <div className='learn-modal-details'>
                                    <div className="learn-modal-details-desc">Find Complete details on how AirCover protexts your booking in our</div>
                                    <a className="learn-modal-details-link" href="https://www.airbnb.com/help/article/3218" target="_blank">Help Center</a> 
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>)


            }
        </>   
    )
}