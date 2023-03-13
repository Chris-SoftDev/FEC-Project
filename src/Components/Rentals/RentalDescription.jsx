import './RentalDescription.css';
import { useContext, useRef } from 'react';
import RentalContext from '../../Context/RentalContext'
import HostContext from '../../Context/HostContext'
import ShowRentalLearn from './ShowRentalLearn';
import ShowRentalShow from './ShowRentalShow';

function RentalDescription() {
    const { showRentalState, openRental, miniLearnMoreRef, showRentalMore, openShowMore } = useContext(RentalContext)
    const {hostData, rulesData} = useContext(HostContext)

    return (
        <>
        <div className='Rental-Selection-Holder'>
            <div className='Rental-Text-Cont'>
                <div className='Rental-Text-Top'>
                    <h2 className='Rental-Section-Header'>Entire cabin hosted by Tag & Sherilyn</h2>
                </div>
                <div className='Rental-Text-Bottom'>
                    <ul className='Rental-List'>
                        <li className='Rental-List-Child' >
                            <span>5 guests</span>
                        </li>
                        <li className='Rental-List-Child'>
                            <span aria-hidden="true" > · </span>    
                            <span>3 bedrooms</span>
                        </li> 
                        <li className='Rental-List-Child'>
                            <span aria-hidden="true"> · </span>
                            <span>4 beds</span>
                            
                        </li>
                        <li className='Rental-List-Child'>
                            <span aria-hidden="true"> · </span>    
                            <span>2 baths</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='Rental-Picture-Cont'>
                
                <div className= "rental-img-container">
                    <img src={hostData.url}></img>			
				</div>
            </div>
        </div>
        {/* <div className='rental-self-checkin'>  */}
            <div className='self-check-in-container'>
                    <div className='self-checkin-doors'>
                        <div className='door-icon'>
                            <svg viewBox='0 0 32 32'>
                                <path d="m24.3334 1.66675c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323-.00065 24.666 3.00065.00075v2h-26.66665v-2l3-.00075v-24.666c0-1.05436681.81587301-1.91816558 1.850737-1.99451429l.149263-.00548571zm-4.00065 2h-12.666l-.00075 24.66625 12.66675-.00025zm4.00065 0h-2.00065v24.666l2.00025.00025zm-7.0001 11.00002c.7363778 0 1.33333.5969522 1.33333 1.33333s-.5969522 1.33333-1.33333 1.33333-1.33333-.5969522-1.33333-1.33333.5969522-1.33333 1.33333-1.33333z"></path>
                            </svg>
                            
                        </div>

                        <div className='self-checkin-sub-desc'>
                            <div className='self-check-in-door-info'>{rulesData.self_check} </div>
                            <div className='self-check-in-door-description'>Check yourself in with the smartlock.</div>
                        </div>
                            
                    </div>        
                    
                    <div className='self-checkin-keys'>
                        <div className='key-icon'>
                            <svg viewBox='0 0 32 32'>
                                <path d="m16.8438 27.1562-.00005-3.39845-.2608465.0913211c-.9857292.3215073-2.0303948.5116467-3.1127817.5499306l-.4076218.0071983-.2927873-.0037049c-6.03236807-.1528291-10.89442655-5.0148222-11.04725775-11.0472069l-.00370495-.2927882.00370495-.2927873c.1528312-6.03236807 5.01488968-10.89442655 11.04725775-11.04725775l.2927873-.00370495.2927882.00370495c6.0323847.1528312 10.8943778 5.01488968 11.0472069 11.04725775l.0037049.2927873-.00663.3912275c-.0484899 1.4286741-.3615343 2.7917824-.8920452 4.0406989l-.1327748.2963236 7.90645 7.90705v5.5834h-5.5834l-4.12505-4.12545zm-6.5313-19.93745c1.708641 0 3.09375 1.38511367 3.09375 3.09375 0 1.7086436-1.3851064 3.09375-3.09375 3.09375-1.70863633 0-3.09375-1.385109-3.09375-3.09375 0-1.70863365 1.38511635-3.09375 3.09375-3.09375zm0 2.0625c-.56954635 0-1.03125.46170365-1.03125 1.03125 0 .5695521.46169942 1.03125 1.03125 1.03125.5695564 0 1.03125-.4616936 1.03125-1.03125 0-.56955058-.4616979-1.03125-1.03125-1.03125zm12.1147 15.81255 4.12455 4.12495h2.667v-2.667l-8.37295-8.37255.3697-.6775.1603998-.3074798c.56763-1.1397167.90791-2.4128858.9606815-3.761954l.0072187-.3697662-.0038197-.2688703c-.1397418-4.91222958-4.0963692-8.86881961-9.0086094-9.00856l-.2688709-.0038197-.2688703.0038197c-4.91222958.13974039-8.86881961 4.09633042-9.00856 9.00856l-.0038197.2688703.0038197.2688709c.14228112 5.0015536 4.24146819 9.0124291 9.2774303 9.0124291 1.4456308 0 2.8116781-.3298367 4.0293209-.9177001l.3012791-.1522999 1.5131-.7998-.00045 4.61975z"></path>
                            </svg>
                            
                        </div>
                        <div className='self-checkin-sub-desc'>
                            <div className='self-check-in-key-info'>Great check-in experience</div>
                            <div className='self-check-in-key-description'>100% of recent guests gave the check-in rocess a 5-star rating.</div>
                        </div>    
                    </div>    

                    <div className='self-checkin-hearts'>   
                        <div className='heart-icon'>
                            <svg viewBox='0 0 32 32'>
                                <path d="m23.0204313 3.00582063c-2.0815427.07751293-4.0715877.92728952-5.5789504 2.43470494l-1.4414809 1.44047443-1.4404171-1.44031065c-1.5845115-1.58335003-3.6983863-2.44068935-5.8929929-2.44068935-2.19416638 0-4.30898823.85772467-5.89177678 2.44051322-1.58391215 1.58390109-2.44156322 3.69775756-2.44156322 5.89278678 0 4.9282095 2.48419629 8.8512108 8.03256412 13.439053l.70954716.5770638.74171734.584714.77413928.5930892c.131739.0995864.2648394.199552.3993065.2999118l.823244.607011.8562953.6171982.8895983.6281103.9231529.6397472 1.5170817 1.0308345 1.3291121-.9009656 1.0589072-.7287753.6612652-.4625621.7010987-.498181.8533598-.6198244c7.3971739-5.4452801 11.0629604-10.1222564 11.0629604-15.8064246 0-2.19559863-.8569151-4.30921968-2.4404957-5.89278925-1.5843319-1.58317036-3.6982062-2.44051075-5.8928043-2.44051075zm.3128687 1.99417937c1.6695137 0 3.2735403.65055751 4.4788526 1.85498605 1.2043504 1.20434208 1.8544474 2.80783678 1.8544474 4.47831395 0 4.2987547-2.6123854 8.1213061-8.009061 12.474023l-.7197183.570835c-.2451788.1913357-.495635.3837563-.7513829.5773445l-.7831323.5843503-.8149664.5918523-.6943428.4933793-.6495182.4543204-1.2444781.8545952-.3599806-.2464089c-.3060116-.2102151-.6062613-.4182535-.900798-.6242279l-.8665202-.6118437c-.1415799-.1009795-.2817437-.2014711-.4204976-.3014889l-.8156535-.594534c-.1331387-.0981789-.2648797-.1959122-.3952291-.2932139l-.7654464-.5787439-.7323414-.5690616c-5.8464087-4.609638-8.4102832-8.3182024-8.4102832-12.7811772 0-1.66972745.65069601-3.27350087 1.85577431-4.47857075 1.20389067-1.20389067 2.80861035-1.85472925 4.47756569-1.85472925 1.6695226 0 3.2735495.6505567 4.4788626 1.85498605l2.8542663 2.8556887 2.8559829-2.85594303c1.2038387-1.20388075 2.8086117-1.85473172 4.4775982-1.85473172z"></path>
                            </svg>   
                        </div>
                        <div className='self-checkin-sub-desc'>
                            <div className='self-check-in-heart-info'>Highly rated Host</div>
                            <div className='self-check-in-heart-description'>Tag&Sherilyn has received 5-star ratings from 95% of recent guests</div>
                        </div>
                    </div>
                </div> 
        {/* </div> */}
        {/* <div className='rental-aircover'> */}
            <section className='rental-aircover-section'>
                <h2 className='rental-airCover-title'>
                    <img className="rental-airCover-image" src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="AirCover"></img>
                </h2>

                <div className='rental-aircover-desc-fix'>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</div>
                
                <div className="learn-more-link" onClick={openRental}>
                    <div >Learn More</div>   
                </div>
                <div className='learn-more-link-under'></div>
            </section>
        {/* </div> */}
        <div className='rental-about'>
            <span className='rental-about-span'>
            Come enjoy our mountaintop getaway just 45-minutes from Boise with stunning views for days! Sip cocoa on the private hilltop, soak in the hillside hot tub, or enjoy the peaceful full-sized deck after a day of hiking/biking/snowshoeing. Did we mention the views? The 1500 sq ft cabin includes a luxurious loft-style master suite (view!), work loft with desk (view!), and two additional bedrooms (yep, views!). Even the fully equipped kitchen has views!  Get away without going away - book today...
            </span>
            <div className="rental-about-showmore-link" onClick={openShowMore}>
                <div>Show More</div>
                <div className='arrow'>
                    <svg viewBox='0 0 18 18'>
                        <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path>
                    </svg>
                </div>
            </div>
            
        </div>
        {showRentalState && (<ShowRentalLearn  />)}
        {showRentalMore && (<ShowRentalShow />)}
        </>
     );
}

export default RentalDescription;

