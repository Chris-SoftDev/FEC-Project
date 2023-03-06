import { useContext } from 'react';
import { HostContext } from '../Context/HostContext';
import "./ShowRules.css"

export default function ShowRules() {

    const { showHouseRules, closeHouseRules } = useContext(HostContext)

    return (
        <>
            {showHouseRules && (
                <div className="modal-overlay">
                    <div className='rule-modal-container'>
                        <div className='rules-modal'>
                            <div className='rules-x-container'>
                                <button className="rules-x" onClick={closeHouseRules}>X</button>
                            </div>
                            <div className='rules-content-container'>
                                <div className='rules-title'>
                                    <p>House rules</p>
                                </div>
                                <div className='rules-info'>
                                Follow these rules to be a considerate guest and avoid any issues during your stay.
                                </div>
                                <div className='who-container'>
                                    <div className='who-title'>
                                        <p>Who can stay</p>
                                    </div>
                                    <div className='max-guest'>

                                    </div>
                                    <div className='pets'>

                                    </div>
                                </div>
                                <div className='allowed-container'>

                                </div>
                                <div className='additional-rules-container'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}