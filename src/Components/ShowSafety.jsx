import { useContext } from 'react';
import { HostContext } from '../Context/HostContext';
import "./ShowSafety.css"

export default function ShowSafety() {

    const { showMoreSafety, closeSafety } = useContext(HostContext)

    return (
        <>
            {showMoreSafety && (
                <div className="modal-overlay">
                    <div className='safety-modal-container'>
                        <div className="safety-modal">
                        <button className="close-safety-modal" onClick={closeSafety}>
                            X
                        </button>
                        <div>Safety & property</div>
                        <p>It Worked!!</p>
                    </div>
                    </div>
                </div>
            )}
        </>
    )
}