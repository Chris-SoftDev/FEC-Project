import { useContext } from 'react';
import { RegionProvider } from '../../Context/RegionContext';
import NavContext from '../../Context/NavContext';
import FooterLanguage from './FooterLanguage';
import './FooterLangMenu.css'

function FooterLangMenu() {
    const { closeFooterLangMenu } = useContext(NavContext)

    return ( 
        <div className='footer-lang-menu-cover-screen'>
            <div className='footer-lang-menu-container'>
                <div className="footer-lang-menu-header-container">
                    <div id="footer-lang-menu-close-btn" onClick={closeFooterLangMenu}>
                        <button>
                            <svg viewBox='0 0 32 32'>
                                <path d="m6 6 20 20"></path>
                                <path d="m26 6-20 20"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="footer-lang-menu-body-container">
                    <div className="footer-lang-menu-body-content">
                        <div className="footer-lang-content-container">
                            <RegionProvider>
                                <FooterLanguage />
                            </RegionProvider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterLangMenu;