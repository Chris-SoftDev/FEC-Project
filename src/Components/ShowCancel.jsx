import { useContext } from 'react';
import { HostContext } from '../Context/HostContext';
import "./ShowCancel.css"

export default function ShowCancel() {

    const { showCancellation, closeCancellation } = useContext(HostContext)

    return (
        <>
            {showCancellation && (
                <div className="modal-overlay">
                    <div className='cancel-modal-container'>
                        <div className="cancel-modal">
                            <div className='cancel-x-container'>
                                <button className="cancel-x" onClick={closeCancellation}>X</button>
                            </div>
                            <div className='cancel-content-container'>
                                <div className='cancel-title'>Cancellation policy</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}