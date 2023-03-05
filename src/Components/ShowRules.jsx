import { useContext } from 'react';
import { HostContext } from '../Context/HostContext';
import "./ShowRules.css"

export default function ShowRules() {

    const { showHouseRules, closeHouseRules } = useContext(HostContext)

    return (
        <>
            {showHouseRules && (
                <div className="modal-overlay">
                    <div className='rules-modal-container'>
                        <div className="rules-modal">
                        <button className="close-rules-modal" onClick={closeHouseRules}>
                            X
                        </button>
                        <div>House rules</div>
                        <p>It Worked!!</p>
                    </div>
                    </div>
                </div>
            )}
        </>
    )
}