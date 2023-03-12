import { useContext } from "react";
import RentalContext from '../../Context/RentalContext'
import "./ShowRentalShow.css"



export default function ShowRentalShow() {

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
                                    <p>About this Space</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)


            }
        </>   
    )
}