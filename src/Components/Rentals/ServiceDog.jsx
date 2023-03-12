import { useContext } from 'react';
import HostContext from '../../Context/HostContext';
import './ServiceDog.css'

function ServiceDog() {
    const { serviceDogRef, closeServiceDog } = useContext(HostContext)

    return ( 
        <div className="service-dog-cover-screen">
            <div className="service-dog-modal-container" ref={serviceDogRef}>
                <div className="service-dog-modal-header-container">
                    <div className="service-dog-modal-close-btn" onClick={closeServiceDog}>
                        <button>
                            <svg viewBox='0 0 32 32'>
                                <path d="m6 6 20 20"></path>
                                <path d="m26 6-20 20"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="service-dog-modal-body-container">
                    <img src="https://a0.muscache.com/pictures/adafb11b-41e9-49d3-908e-049dfd6934b6.jpg" alt="Service Animal Image" />
                </div>
                <div className="service-dog-modal-footer-container">
                    <div className='service-dog-modal-footer-title'>Service animals</div>
                    <div className='service-dog-modal-footer-details'>Service animals are't pets, so there's no need to add them here.</div>
                    <div className='service-dog-modal-footer-notes'>Traveling with an emotional support animal? Check out our <a href="#javascript:void(0)">accessibility policy</a></div>
                </div>
            </div>
        </div>
     );
}

export default ServiceDog;