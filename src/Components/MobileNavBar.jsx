import { useContext } from 'react';
import NavContext from '../Context/NavContext';
import LoginMenu from './LoginMenu';
import './MobileNavBar.css'

function MobileNavbar() {
    const { isLoginMenuVisible, openLoginMenu} = useContext(NavContext);

    return ( 
        <>
            <a href="https://www.airbnb.com/s/homes">
                <div className='home-link-container'>
                    <div className='link-icon'>
                        <i className="fa fa-chevron-left"></i>
                    </div>
                    <div className='link-name'>
                        Homes
                    </div>
                </div>
            </a>
            <div className="side-links-container">
                <div className='share-home-btn-container'>
                    <button id='share-home-btn'>
                        <svg viewBox='0 0 32 32'>
                            <g fill='none'>
                                <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
                                <path d="M16 3v23V3z"></path>
                                <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path>
                            </g>
                        </svg>
                    </button>
                </div>
                <div className="save-btn-container">
                    <button id='mobile-nav-save-btn' onClick={openLoginMenu}>
                        <svg viewBox='0 0 32 32'>
                            <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isLoginMenuVisible && (
                <LoginMenu />
            )}
        </>
     );
}

export default MobileNavbar;