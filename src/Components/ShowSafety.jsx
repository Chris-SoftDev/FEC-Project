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
                            <div className="safety-x-container">
                                <button className="safety-x" onClick={closeSafety}>X</button>
                            </div>
                            <div className='safety-content-container'>
                                <div className='safety-title'>
                                    <p>Safety & property</p>
                                </div>
                                <div className='safety-info'>
                                    <p>Avoid surprises by looking over these important details about your Host's property.</p>
                                </div>
                                <div className='considerations'>
                                    <div className='considerations-title'>Safety considerations</div>
                                    <div className='pool-container'>
                                        <div className='pool-icon-container'>
                                        </div>
                                        <div className='pool'>Pool/hot tub without a gate or lock</div>
                                    </div>
                                    <div className='devices-container'>
                                        <div className='devices-title'>Safety devices</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}