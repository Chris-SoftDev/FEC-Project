import { useContext } from "react";
import RentalContext from '../../Context/RentalContext'
import "./ShowRentalShow.css"



export default function ShowRentalShow() {

    const { showRentalMore, closeShowMore, miniShowMoreRef } = useContext(RentalContext)
    return (
        <>
            {showRentalMore && (
                <div className="modal-overlay" >
                    <div className='show-modal-container' ref={miniShowMoreRef}>
                        <div className='show-modal' >
                            <div className='show-close-btn'onClick={closeShowMore}>
                                <button>
                                    <svg viewBox='0 0 32 32'>  
                                        <path d="m6 6 20 20"></path>
                                        <path d="m26 6-20 20"></path>
                                    </svg>
                                </button>
                            </div>
                            <section>
                                <div className='show-content-container'>
                                    <div className='show-title'>
                                        <p>About this Space</p>
                                    </div>
                                    <div className='show-content-para1'>
                                        <span className='show-content-span' >
                                        Come enjoy our mountaintop getaway just 45-minutes from Boise with stunning views for days! Sip cocoa on the private hilltop, soak in the hillside hot tub, or enjoy the peaceful full-sized deck after a day of hiking/biking/snowshoeing. Did we mention the views? The 1500 sq ft cabin includes a luxurious loft-style master suite (view!), work loft with desk (view!), and two additional bedrooms (yep, views!). Even the fully equipped kitchen has views!  Get away without going away - book today
                                        </span>

                                    </div>
                                    <div className="show-content-para1">
                                        <h3 className="rules-content-para2-title">The space</h3>
                                        <span className='show-content-span'>The entire 1 acre property has wifi, Verizon wireless 4GLTE, and a landline. Our cabin is pet friendly, with a modest pet fee. The cabin can be accessed year-round but an AWD/4WD vehicle with snow tires and chains (as a backup) are a requirement in the winter</span>
                                    </div>
                                    <div className="show-content-para1">
                                        <h3 className="rules-content-para2-title">Guest Access</h3>
                                        <span className='show-content-span'>Guests have full access to the 1 acre property, all of which features commanding views of the valleys below. This includes year-round use of the hot tub  as well as the hilltop fire ring, depending on the forest fire threat level. Satellite TV, Hulu, HBOGO, and Netflix also available for guest use. </span>

                                    </div>
                                    <div className="show-content-para1">
                                        <h3 className="rules-content-para2-title">Other Things to note</h3>
                                        <span className='show-content-span'> 
                                        There is a fully fenced pet area for your furry friends!  Wilderness Ranch is an on-leash mountain community so please respect the neighbors and leash-up if you leave our property. Kindly pick up after your pets, please.  *The fee for pets is $25/day/pet.  If you plan to bring a pet, please let us know at the time of booking. 2 pet maximum. Thanks!* 
                                         <br></br><br></br>We launder our sheets/towels/etc. using name-brand household detergents, and we do use dryer sheets. If you are sensitive to these types of products, please let us know at the time of your booking so that we can discuss options.
                                         <br></br><br></br>Disclosure: We have a security camera aimed at the driveway/parking area. This helps us confirm the weather/road conditions, spot game, and confirm guest check-in/check-outs.
                                        </span>
                                        
                                    </div>

                                </div>
                                
                            </section>
                        </div>
                    </div>
                </div>)


            }
        </>   
    )
}