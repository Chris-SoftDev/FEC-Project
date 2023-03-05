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
                        <button className="close-cancel-modal" onClick={closeCancellation}>
                            X
                        </button>
                        <div>Cancellation</div>
                        <p>It Worked!!</p>
                    </div>
                    </div>
                </div>
            )}
        </>
    )
}