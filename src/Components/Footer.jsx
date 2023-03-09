import "./Footer.css";
import { useContext } from 'react'
import NavContext from '../../Context/NavContext'
import { RegionProvider } from '../../Context/RegionContext'
import LangMenu from '../NavBar/LangMenu';

function Footer () {
    const { openLangMenu, isLangMenuVisible, setIsLangMenuVisible } = useContext(NavContext)

    return ( 
        <div className="parent">
            <div className="main-column">
                <div className="footer-column">Support
                    <div className="content-column">
                        <div className="footer-content">
                            <a href="https://www.airbnb.com/help/?audience=guest">Help Center</a>
                        </div>
                        <div className="footer-content">
                            <a href="https://www.airbnb.com/aircover">GroundCover</a> 
                        </div>
                        <div className="footer-content">
                            <a href="https://www.airbnb.com/accessibility">Supporting people with disabilities</a>
                        </div>
                        <div className="footer-content">
                            <a href="https://www.airbnb.com/help/article/2701">Cancellation options</a>
                        </div>
                        <div className="footer-content">
                            <a href="https://www.airbnb.com/d/covidsafety">Our COVID-19 Response</a>
                        </div>
                        <div className="footer-content">
                            <a href="https://www.airbnb.com/help/article/3290">Report a neighborhood concern</a>
                        </div>
                    </div>
                </div>
                <div className="footer-column">Community
                    <div className="content-column">
                        <div className="footer-content">
                            <a href="https://www.airbnb.org/?locale=en&_ga=2.252792588.462176117.1677769498-2129188324.1677695124">Groundbnb.org: disaster relief housing</a>
                        </div>
                        <div className="footer-content">
                            <a href="https://www.airbnb.com/against-discrimination">Combating discrimination</a>
                        </div>

                    </div>
                </div>
                <div className="footer-column">Hosting
                    <div className="content-column">
                        <div className="footer-content">
                            <a href="https://www.airbnb.com/host/homes?from_footer=1">Groundbnb your home</a>
                        </div>
                        <div className="footer-content">
                            <a href="https://www.airbnb.com/aircover-for-hosts">GroundCover for Hosts</a>
                        </div>
                        <div className="footer-content">
                            <a href="https://www.airbnb.com/resources/hosting-homes">Explore hosting resources</a>
                        </div>
                        <div className="footer-content">
                            <a href="https://community.withairbnb.com/t5/Community-Center/ct-p/community-center">Visit our community forum</a>
                        </div>
                        <div className="footer-content">
                            <a href="https://www.airbnb.com/help/article/1376">How to host responsibly</a>
                        </div>
                        <div className="footer-content">
                            <a href="https://www.airbnb.com/airbnb-friendly">Groundbnb-friendly apartments</a>
                        </div>
                    </div>
                </div>
                <div className="footer-column">Groundbnb
                    <div className="content-column">
                        <div className="footer-content">
                            <a href="https://news.airbnb.com/">Newsroom</a>
                        </div>
                        <div className="footer-content">
                            <a href="https://www.airbnb.com/2022-winter">Learn about new features</a>
                        </div>
                        <div className="footer-content">
                            <a href="https://news.airbnb.com/what-makes-airbnb-airbnb/">Letter from our founders</a>
                        </div>
                        <div className="footer-content">
                            <a href="https://careers.airbnb.com/">Careers</a>
                        </div>
                        <div className="footer-content">
                            <a href="https://investors.airbnb.com/home/default.aspx">Investors</a>
                        </div>
                        <div className="footer-content">
                            <a href="https://www.airbnb.com/giftcards">Gift cards</a>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="border-line">
                {/* <p>Copyright</p> */}
                <div className="legal-column">
                    <ul className="legal-list">
                        <a className="legal-info">© 2023 Groundbnb, Inc.</a>
                        <div className="legal-point">·</div>
                        <a href="https://www.airbnb.com/help/article/2908" className="legal-item">Terms</a>
                        <div className="legal-point">·</div>
                        <a href="https://www.airbnb.com/sitemaps/v2" className="legal-item">Sitemap</a>
                        <div className="legal-point">·</div>
                        <a href="https://www.airbnb.com/help/article/2855" className="legal-item">Privacy</a>
                        <div className="legal-point">·</div>
                        <a href="https://www.airbnb.com/help/sale-share-opt-out" className="legal-item">Your Privacy Choices</a>
                        <a href="https://www.airbnb.com/help/sale-share-opt-out">
                            <div id="privacy-symbol">
                                <svg 
                                    width="24" 
                                    height="10" 
                                    fill="none">
                                    <rect 
                                        x="0.5" y="0.5" 
                                        width="25" 
                                        height="11" 
                                        rx="5.5" 
                                        fill="#fff"
                                    ></rect>
                                    <path 
                                        d="M14 1h7a5 5 0 010 10H11l3-10z" 
                                        fill="#06F"
                                    ></path>
                                    <path 
                                        d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5" 
                                        stroke="#06F" 
                                        strokeLinecap="round"
                                    ></path>
                                    <path 
                                        d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5" 
                                        stroke="#fff" 
                                        strokeLinecap="round"
                                    ></path>
                                    <rect 
                                        x="0.5" 
                                        y="0.5" 
                                        width="25" 
                                        height="11" 
                                        rx="5.5" 
                                        stroke="#06F"
                                    ></rect>
                                </svg>
                            </div>
                        </a>
                    </ul>
                </div>
                <div className="econ-column">
                    <div className="econ-items" id="lang">
                        <svg>
                            <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
                        </svg>
                    </div>
                    <div className="econ-items" id="lang-text" onClick={openLangMenu}>English(US)</div>
                    <div className="econ-items">$ USD</div>
                </div>
                <div className="social-column">
                    <a href="https://www.facebook.com/airbnb">
                        <div className="social-items" id="facebook">
                            <svg viewBox="0 0 32 32">
                                <path d="m8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78" fillRule="evenodd"></path>
                            </svg>
                        </div>
                    </a>
                    <a href="https://twitter.com/airbnb">
                        <div className="social-items" id="twitter">
                            <svg viewBox="0 0 32 32">
                                <path d="m31 6.36c-1.16.49-2.32.82-3.55.95 1.29-.76 2.22-1.87 2.72-3.38a13.05 13.05 0 0 1 -3.91 1.51c-1.23-1.28-2.75-1.94-4.51-1.94-3.41 0-6.17 2.73-6.17 6.12 0 .49.07.95.17 1.38-4.94-.23-9.51-2.6-12.66-6.38-.56.95-.86 1.97-.86 3.09 0 2.07 1.03 3.91 2.75 5.06-1-.03-1.92-.3-2.82-.76v.07c0 2.89 2.12 5.42 4.94 5.98-.63.17-1.16.23-1.62.23-.3 0-.7-.03-1.13-.13a6.07 6.07 0 0 0 5.74 4.24c-2.22 1.74-4.78 2.63-7.66 2.63-.56 0-1.06-.03-1.43-.1 2.85 1.84 6 2.76 9.41 2.76 7.29 0 12.83-4.01 15.51-9.3 1.36-2.66 2.02-5.36 2.02-8.09v-.46c-.03-.17-.03-.3-.03-.33a12.66 12.66 0 0 0 3.09-3.16" fillRule="evenodd"></path>
                            </svg>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/airbnb/">
                        <div className="social-items" id="insta">
                            <svg viewBox="0 0 24 24">
                                <path d="m23.09.91c-.61-.61-1.33-.91-2.17-.91h-17.84c-.85 0-1.57.3-2.17.91s-.91 1.33-.91 2.17v17.84c0 .85.3 1.57.91 2.17s1.33.91 2.17.91h17.84c.85 0 1.57-.3 2.17-.91s.91-1.33.91-2.17v-17.84c0-.85-.3-1.57-.91-2.17zm-14.48 7.74c.94-.91 2.08-1.37 3.4-1.37 1.33 0 2.47.46 3.41 1.37s1.41 2.01 1.41 3.3-.47 2.39-1.41 3.3-2.08 1.37-3.41 1.37c-1.32 0-2.46-.46-3.4-1.37s-1.41-2.01-1.41-3.3.47-2.39 1.41-3.3zm12.66 11.63c0 .27-.09.5-.28.68a.92.92 0 0 1 -.67.28h-16.7a.93.93 0 0 1 -.68-.28.92.92 0 0 1 -.27-.68v-10.13h2.2a6.74 6.74 0 0 0 -.31 2.05c0 2 .73 3.71 2.19 5.12s3.21 2.12 5.27 2.12a7.5 7.5 0 0 0 3.75-.97 7.29 7.29 0 0 0 2.72-2.63 6.93 6.93 0 0 0 1-3.63c0-.71-.11-1.39-.31-2.05h2.11v10.12zm0-13.95c0 .3-.11.56-.31.77a1.05 1.05 0 0 1 -.77.31h-2.72c-.3 0-.56-.11-.77-.31a1.05 1.05 0 0 1 -.31-.77v-2.58c0-.29.11-.54.31-.76s.47-.32.77-.32h2.72c.3 0 .56.11.77.32s.31.47.31.76z" fillRule="evenodd"></path>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
            {/* {openLang && (<FooterLang />)} 
            {openCurr && (<FooterCurrency/>)} */}
            {isLangMenuVisible && (
                <RegionProvider>
                    <LangMenu />
                </RegionProvider>
            )}
        </div>
    );        
}

export default Footer ;