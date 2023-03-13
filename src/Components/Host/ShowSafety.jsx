import { useContext } from 'react';
import HostContext from '../../Context/HostContext';
import "./ShowSafety.css"

export default function ShowSafety() {

    const { showMoreSafety, closeSafety, safetyData, safetyModalRef } = useContext(HostContext)


    return (
        <>
            {showMoreSafety && (
                <div className="modal-overlay">
                    <div className='safety-modal-container' ref={safetyModalRef}>
                        <div className="safety-modal">
                            <div className='rules-close-btn'onClick={closeSafety}>
                                <button>
                                    <svg viewBox='0 0 32 32'>  
                                        <path d="m6 6 20 20"></path>
                                        <path d="m26 6-20 20"></path>
                                    </svg>
                                </button>
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
                                        <div className='pool-icon'>
                                            <svg viewBox='0 0 32 32'>
                                                <path d="M24 26c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 27.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 28c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 28c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 28c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 29.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 26c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 26c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 26zm0-5c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 22.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 23c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 23c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 23c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 24.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 21c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 21c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 21zM20 3a4 4 0 0 1 3.995 3.8L24 7v2h4v2h-4v5c.912 0 1.798.3 2.5.862l.171.147c.306.276.71.445 1.142.483L28 17.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 18c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 18c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 18c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 19.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 16c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492a3.956 3.956 0 0 1 2.444-1.002L16 16v-5H4V9h12V7a2 2 0 0 0-3.995-.15L12 7h-2a4 4 0 0 1 7-2.645A3.985 3.985 0 0 1 20 3zm-2 13.523c.16.091.313.194.459.307l.212.179c.35.316.826.49 1.33.491.439 0 .86-.134 1.191-.38l.137-.111c.206-.187.431-.35.67-.486V11h-4zM20 5a2 2 0 0 0-1.995 1.85L18 7v2h4V7a2 2 0 0 0-2-2z"></path>
                                            </svg>
                                        </div>
                                        <div className='pool'>{safetyData.pool}</div>
                                    </div>
                                    <div className='dangerous-animals-container'>
                                        <div className='hazard-icon'>
                                            <svg viewBox='0 0 32 32'>
                                                <path d="M14.649 2.29a3 3 0 0 1 3.846 1.013l.096.155 12.852 22.03a3 3 0 0 1-2.415 4.507L28.85 30H3.15A3 3 0 0 1 .47 25.649l.087-.16L13.41 3.457a3 3 0 0 1 .893-.962l.186-.118zm2.215 2.175a1 1 0 0 0-1.656-.106l-.072.106L2.285 26.496a1 1 0 0 0 .732 1.495l.132.009H28.85a1 1 0 0 0 .923-1.386l-.059-.118zM16 22a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm1-10v8h-2v-8z"></path>
                                            </svg>
                                        </div>
                                        <div className='dangerous-animals'>
                                            <div className='dangerous-animals-title'>{safetyData.animals}</div>
                                            <div className='dangerous-animals-info'>{safetyData.animal_warning}</div>
                                        </div>
                                    </div>
                                    <div className='devices-container'>
                                        <div className='devices-title'>Safety devices</div>
                                        <div className='security-container'>
                                            <div className='security-camera-icon'>
                                                <svg viewBox='0 0 32 32'>
                                                    <path d="M23 3a2 2 0 0 1 1.995 1.85L25 5v1.522l5-1.999v11.954l-5-2V16a2 2 0 0 1-1.85 1.995L23 18l-6.1.001a5.005 5.005 0 0 1-3.984 3.915 5.002 5.002 0 0 1-4.7 4.08L8 26H4v4H2V20h2v4h4a3.001 3.001 0 0 0 2.872-2.13A5.004 5.004 0 0 1 7.1 18.002L4 18a2 2 0 0 1-1.995-1.85L2 16V5a2 2 0 0 1 1.85-1.995L4 3zM12 14a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm11-9H4v11h3.1a5.002 5.002 0 0 1 9.8 0H23zm5 2.476l-3 1.2v3.647l3 1.2zM7 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                                                </svg>
                                            </div>
                                            <div className='security'>
                                                <div className='security-title'>{safetyData.camera}</div>
                                                <div className='security-info'>{safetyData.camera_info}</div>
                                            </div>
                                        </div>
                                        {safetyData.carbon ? (<div className='carbon-monoxide-container'>
                                            <div className='carbon-monoxide-icon'>
                                                <svg viewBox='0 0 32 32'>
                                                    <path d="M25 2a5 5 0 0 1 4.995 4.783L30 7v18a5 5 0 0 1-4.783 4.995L25 30H7a5 5 0 0 1-4.995-4.783L2 25V7a5 5 0 0 1 4.783-4.995L7 2zm0 2H7a3 3 0 0 0-2.995 2.824L4 7v18a3 3 0 0 0 2.824 2.995L7 28h18a3 3 0 0 0 2.995-2.824L28 25V7a3 3 0 0 0-2.824-2.995zM11.1 17a5.006 5.006 0 0 0 3.9 3.9v2.03A7.005 7.005 0 0 1 9.071 17zm9.8 0l2.029.001a7.005 7.005 0 0 1-5.928 5.928v-2.03A5.006 5.006 0 0 0 20.9 17zM16 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1.001-5.929A7.005 7.005 0 0 1 22.929 15H20.9A5.006 5.006 0 0 0 17 11.1zm-2.001 0v2.03A5.006 5.006 0 0 0 11.1 15H9.07A7.005 7.005 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                                                </svg>
                                            </div>
                                            <div className='carbon-monoxide-info'>Carbon monoxide alarm installed</div>  
                                        </div>) : null}
                                        {safetyData.smoke_alarm ? (<div className='smoke-alarm-container'>
                                            <div className='smoke-alarm-icon'>
                                                <svg viewBox='0 0 32 32'>
                                                    <path d="M16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C1 7.716 7.716 1 16 1zm0 2C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm-4.9 14a5.006 5.006 0 0 0 3.9 3.9v2.03A7.005 7.005 0 0 1 9.071 17zm9.8 0l2.029.001a7.005 7.005 0 0 1-5.928 5.928v-2.03A5.006 5.006 0 0 0 20.9 17zM16 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1.001-5.929A7.005 7.005 0 0 1 22.929 15H20.9A5.006 5.006 0 0 0 17 11.1zm-2.001 0v2.03A5.006 5.006 0 0 0 11.1 15H9.07A7.005 7.005 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                                                </svg>
                                            </div>
                                            <div className='smoke-alarm-info'>Smoke alarm installed</div>  
                                        </div>) : null}
                                    </div>
                                    <div className='property-info-container'>
                                        <div className='property-info-title'>Property info</div>
                                        <div className='stairs-container'>
                                            <div className='stairs-icon'>
                                                <svg viewBox='0 0 32 32'>
                                                    <path d="M29 3h-8v6h-6v6H9v6H3v8h26zm-2 2v22H5v-4h6v-6h6v-6h6V5z"></path>
                                                </svg>
                                            </div>
                                            <div className='stairs'>
                                                <div className='stairs-title'>{safetyData.stairs}</div>
                                                <div className='stairs-info'>{safetyData.stairs_info}</div>
                                            </div>
                                        </div>
                                        <div className='amenity-container'>
                                            <div className='amenity-icon'>
                                                <svg viewBox='0 0 32 32'>
                                                    <path d="M4 8.242l2 2V17h6.758l1.999 2H6v2h10.757l2 2H6v2h14.757l1.892 1.892-.119.037-.156.036-.075.013A2.018 2.018 0 0 1 22 27H10v2h14.757l1.892 1.892a1.99 1.99 0 0 1-.5.102L26 31H10a2 2 0 0 1-1.995-1.85L8 29v-2H6a2 2 0 0 1-1.995-1.85L4 25V8.242zm-.293-5.95l26 26-1.414 1.415-26-26 1.414-1.414zM25.5 1l-.05.034a3.001 3.001 0 0 1 2.545 2.79L28 4v1h2v2h-2v16.757l-2-2V7h-2v12.757l-2-2V3H7.242l-1.65-1.65c.371-.197.789-.32 1.232-.345L7 1h18.5zM25 3a1 1 0 0 0-.993.883L24 4v1h2V4a1 1 0 0 0-.883-.993L25 3z"></path>
                                                </svg>
                                            </div>
                                            <div className='amenity'>
                                                <div className='amenity-title'>{safetyData.amenity}</div>
                                                <div className='amenity-info'>{safetyData.amenity_info}</div>
                                            </div>
                                        </div>
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