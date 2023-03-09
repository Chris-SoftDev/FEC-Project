import { useContext } from 'react';
import { HostContext } from '../../Context/HostContext';
import "./ShowCancel.css"

export default function ShowCancel() {

    const { showCancellation, closeCancellation } = useContext(HostContext)

    return (
        <>
            {showCancellation && (
                <div className="modal-overlay">
                    <div className='cancel-modal-container'>
                        <div className="cancel-modal">
                            <div className='cancel-close-btn'onClick={closeCancellation}>
                                <button>
                                    <svg viewBox='0 0 32 32'>  
                                        <path d="m6 6 20 20"></path>
                                        <path d="m26 6-20 20"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className='cancel-content-container'>
                                <div className='cancel-title'>Cancellation policy</div>
                                <div className='cancel-info'>
                                    <p>Before you book, make sure you're comfortable with this Host's cancellation policy. Keep in mind that Airbnb's <span>Extenuating Circumstances policy</span> doesn't cover cancellations due to illness or travel disruptions caused by COVID-19.</p>
                                </div>
                                <div className='cancel-by'>Cancel by</div>
                                <div className='first-date-container'>
                                    <div className='date-container'>
                                        <div className='date'>Mar 8</div>
                                        <div className='first-time'>3:00 PM</div>
                                    </div>
                                    <div className='first-refund'>Full refund: Get back 100% of what you paid.</div>
                                </div>
                                <div className='second-date-container'>
                                    <div className='date-container'>
                                        <div className='date'>Mar 13</div>
                                        <div className='second-time'>4:00 PM</div>
                                        <div className='check-in'>{'(check-in)'}</div>
                                    </div>
                                    <div className='second-refund'>Partial refund: Get back 50% of every night but the first one. No refund of the first night or the service fee.</div>
                                </div>
                                <div className='learn-more'>Learn more about cancellation policies</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}