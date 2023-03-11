import { useContext } from 'react';
import NavContext from '../../Context/NavContext';
import './LoginMenu.css';

function LoginMenu() {
    const {loginMenuRef, closeLoginMenu} = useContext(NavContext);

    return (
        <div className='login-menu-cover-screen'>
            <div className='login-menu-container' ref={loginMenuRef}>
                <div className="login-menu-header-container">
                    <div id="login-menu-close-btn" onClick={closeLoginMenu}>
                        <button>
                            <svg viewBox='0 0 32 32'>
                                <path d="m6 6 20 20"></path>
                                <path d="m26 6-20 20"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="login-menu-header">
                        <h1>Log in or sign up</h1>
                    </div>
                    <div className='login-menu-header-spacer'></div>
                </div>
                <div className="login-menu-body-container">
                    <div className='login-menu-body-content-container'>
                        <div className="body-content-header">Welcome to Groundbnb</div>
                    </div>
                    <div className="login-menu-form-container">
                        <form action="" method="post"> {/*TODO: Form action req'd*/}
                            <div className="login-menu-form-inputs">
                                <div className='login-menu-form-input-country'>
                                    {/*TODO: Form input req'd*/}
                                </div>
                                <div className='login-menu-form-input-phone'>
                                    <input type="tel" name="login-signup-phone" id="login-signup-phone" required/>
                                </div>
                            </div>
                            <div className="login-menu-form-footer">
                                We'll call or text you to confirm your number. Standard message and data rates apply. <a href="#">Privacy Policy</a>
                            </div>
                            <div className="login-menu-form-submit-btn-container">
                                <button type='submit'>Continue</button>
                            </div>
                        </form>
                        <div className="login-menu-body-divider-container">
                            <div className="login-menu-body-divider">or</div>
                        </div>
                        <div className="login-menu-body-footer-container">
                            <div className='login-menu-body-footer-links'>
                                <div className='footer-link-icons' id='footer-link-facebook-icon'>
                                    <svg viewBox='0 0 32 32'>
                                        <path fill="#1877F2" d="M32 0v32H0V0z"></path>
                                        <path d="M22.938 16H18.5v-3.001c0-1.266.62-2.499 2.607-2.499h2.018V6.562s-1.831-.312-3.582-.312c-3.654 0-6.043 2.215-6.043 6.225V16H9.436v4.625H13.5V32h5V20.625h3.727l.71-4.625z" fill="#FFF"></path>
                                    </svg>
                                </div>
                                <div>Continue with Facebook</div>
                            </div>
                            <div className='login-menu-body-footer-links'>
                                <div className='footer-link-icons' id='footer-link-google-icon'>
                                    <svg viewBox='0 0 32 32'>
                                    <g transform="translate(4.376957 4.073369)">
                                        <path d="m19.7480429 20.9266305c2.813-2.625 4.063-7 3.313-11.18799996h-11.188v4.62599996h6.375c-.25 1.5-1.125 2.75-2.375 3.562z" fill="#4285f4"></path>
                                        <path d="m1.24804285 17.2396305c.82223 1.6196 2.0014 3.0314 3.4486 4.129s3.1247 1.8523 4.906 2.2073c1.78130005.355 3.62000005.301 5.37740005-.1579s3.3877-1.3108 4.768-2.4914l-3.875-3c-3.313 2.188-8.81300005 1.375-10.68800005-3.75z" fill="#34a853"></path>
                                        <path d="m5.18573285 14.1766305c-.5-1.563-.5-3 0-4.56299996l-3.938-3.062c-1.438 2.875-1.875 6.93799996 0 10.68799996z" fill="#fbbc02"></path>
                                        <path d="m5.18604285 9.61463054c1.374-4.31301 7.25000005-6.81301 11.18700005-3.126l3.438-3.37401c-4.875-4.688-14.37500005-4.5-18.56300005 3.43601l3.938 3.063z" fill="#ea4335"></path>
                                    </g>
                                    </svg>
                                </div>
                                <div>Continue with Google</div>
                            </div>
                            <div className='login-menu-body-footer-links'>
                                <div className='footer-link-icons' id='footer-link-apple-icon'>
                                    <svg viewBox='0 0 24 24'>
                                        <path d="m13.3 2.1a5.1 5.1 0 0 1 3.8-2.1 5.1 5.1 0 0 1 -1.2 3.8 4.1 4.1 0 0 1 -3.6 1.7 4.5 4.5 0 0 1 1-3.4zm-5 3.7c-2.8 0-5.8 2.5-5.8 7.3 0 4.9 3.5 10.9 6.3 10.9 1 0 2.5-1 4-1s2.6.9 4 .9c3.1 0 5.3-6.4 5.3-6.4a5.3 5.3 0 0 1 -3.2-4.9 5.2 5.2 0 0 1 2.6-4.5 5.4 5.4 0 0 0 -4.7-2.4c-2 0-3.5 1.1-4.3 1.1-.9 0-2.4-1-4.2-1z"></path>
                                    </svg>
                                </div>
                                <div>Continue with Apple</div>
                            </div>
                            <div className='login-menu-body-footer-links'>
                                <div className='footer-link-icons' id='footer-link-email-icon'>
                                    <svg viewBox='0 0 32 32'>
                                        <path d="M30.5105,5.87921A5.06207,5.06207,0,0,0,26,3H6A5.06215,5.06215,0,0,0,1.48932,5.87946,4.9444,4.9444,0,0,0,1,8V24a5.00588,5.00588,0,0,0,5,5H26a5.00588,5.00588,0,0,0,5-5V8A4.94373,4.94373,0,0,0,30.5105,5.87921ZM6,5H26a2.97234,2.97234,0,0,1,1.77252.59253l-9.8194,8.41675a2.98373,2.98373,0,0,1-3.90527,0l-9.82013-8.417A2.97238,2.97238,0,0,1,6,5ZM29,24a3.00328,3.00328,0,0,1-3,3H6a3.00328,3.00328,0,0,1-3-3V8a2.96566,2.96566,0,0,1,.10266-.73773l9.64343,8.26556a4.97272,4.97272,0,0,0,6.50782,0L28.89728,7.262A2.96542,2.96542,0,0,1,29,8Z"></path>
                                    </svg>
                                </div>
                                <div>Continue with email</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginMenu;