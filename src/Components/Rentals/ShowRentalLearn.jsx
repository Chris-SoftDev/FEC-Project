import { useContext } from "react";
import RentalContext from '../../Context/RentalContext'
import "./ShowRentalLearn.css"



export default function ShowRentalLearn() {

    const { showRentalState, closeRental } = useContext(RentalContext)
    return (
        <>
            {showRentalState && (
                <div className="modal-overlay">
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
                                <div className='rules-title'>
                                    <p>House rules</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)


            }
        </>   
    )
}