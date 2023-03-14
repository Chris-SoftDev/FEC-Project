import { useContext } from 'react';
import { RegionProvider } from '../../Context/RegionContext';
import NavContext from '../../Context/NavContext';
import FooterCurrency from './FooterCurrency';
import './FooterCurrMenu.css';


function FooterCurrMenu() {
    const { closeFooterCurrMenu } = useContext(NavContext)

    return ( 
        <div className='footer-curr-menu-cover-screen'>
            <div className='footer-curr-menu-container'>
                <div className="footer-curr-menu-header-container">
                    <div id="footer-curr-menu-close-btn" onClick={closeFooterCurrMenu}>
                        <button>
                            <svg viewBox='0 0 32 32'>
                                <path d="m6 6 20 20"></path>
                                <path d="m26 6-20 20"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="footer-curr-menu-body-container">
                    <div className="footer-curr-menu-body-content">
                        <div className="footer-curr-content-container">
                            <RegionProvider>
                                <FooterCurrency />
                            </RegionProvider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterCurrMenu;