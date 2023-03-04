import { useContext } from 'react';
import NavContext from '../Context/NavContext';
import './NavBar.css';

function NavBar() {
    const {profileMenuBtnRef, profileMenuRef, loginMenuRef, toggleProfileMenu, openLoginMenu, closeLoginMenu, isProfileMenuVisible, isLoginMenuVisible, setIsLoginMenuVisible} = useContext(NavContext);

    return (
        <div className="nav-bar-content-container">
            <a href="https://www.airbnb.com">
                <div className="nav-bar-logo">
                    <svg>
                        <path d="M29.3864 22.7101C29.2429 22.3073 29.0752 21.9176 28.9157 21.5565C28.6701 21.0011 28.4129 20.4446 28.1641 19.9067L28.1444 19.864C25.9255 15.0589 23.5439 10.1881 21.0659 5.38701L20.9607 5.18316C20.7079 4.69289 20.4466 4.18596 20.1784 3.68786C19.8604 3.0575 19.4745 2.4636 19.0276 1.91668C18.5245 1.31651 17.8956 0.833822 17.1853 0.502654C16.475 0.171486 15.7005 -9.83959e-05 14.9165 4.23317e-08C14.1325 9.84805e-05 13.3581 0.171877 12.6478 0.503224C11.9376 0.834571 11.3088 1.31742 10.8059 1.91771C10.3595 2.46476 9.97383 3.05853 9.65572 3.68858C9.38521 4.19115 9.12145 4.70278 8.8664 5.19757L8.76872 5.38696C6.29061 10.1884 3.90903 15.0592 1.69015 19.8639L1.65782 19.9338C1.41334 20.463 1.16057 21.0102 0.919073 21.5563C0.75949 21.9171 0.592009 22.3065 0.448355 22.7103C0.0369063 23.8104 -0.094204 24.9953 0.0668098 26.1585C0.237562 27.334 0.713008 28.4447 1.44606 29.3804C2.17911 30.3161 3.14434 31.0444 4.24614 31.4932C5.07835 31.8299 5.96818 32.002 6.86616 32C7.14824 31.9999 7.43008 31.9835 7.71027 31.9509C8.846 31.8062 9.94136 31.4366 10.9321 30.8639C12.2317 30.1338 13.5152 29.0638 14.9173 27.5348C16.3194 29.0638 17.6029 30.1338 18.9025 30.8639C19.8932 31.4367 20.9886 31.8062 22.1243 31.9509C22.4045 31.9835 22.6864 31.9999 22.9685 32C23.8664 32.002 24.7561 31.8299 25.5883 31.4932C26.6901 31.0444 27.6554 30.3161 28.3885 29.3804C29.1216 28.4447 29.5971 27.3341 29.7679 26.1585C29.9287 24.9952 29.7976 23.8103 29.3864 22.7101ZM14.9173 24.377C13.1816 22.1769 12.0678 20.1338 11.677 18.421C11.5169 17.7792 11.4791 17.1131 11.5656 16.4573C11.6339 15.9766 11.8105 15.5176 12.0821 15.1148C12.4163 14.6814 12.8458 14.3304 13.3374 14.0889C13.829 13.8475 14.3696 13.7219 14.9175 13.7219C15.4655 13.722 16.006 13.8476 16.4976 14.0892C16.9892 14.3307 17.4186 14.6817 17.7528 15.1151C18.0244 15.5181 18.201 15.9771 18.2693 16.4579C18.3556 17.114 18.3177 17.7803 18.1573 18.4223C17.7661 20.1349 16.6526 22.1774 14.9173 24.377ZM27.7406 25.8689C27.6212 26.6908 27.2887 27.4674 26.7762 28.1216C26.2636 28.7759 25.5887 29.2852 24.8183 29.599C24.0393 29.9111 23.1939 30.0217 22.3607 29.9205C21.4946 29.8089 20.6599 29.5239 19.9069 29.0824C18.7501 28.4325 17.5791 27.4348 16.2614 25.9712C18.3591 23.3846 19.669 21.0005 20.154 18.877C20.3723 17.984 20.4196 17.0579 20.2935 16.1475C20.1791 15.3632 19.8879 14.615 19.4419 13.9593C18.9194 13.2519 18.2378 12.6768 17.452 12.2805C16.6661 11.8842 15.798 11.6777 14.9175 11.6777C14.0371 11.6777 13.1689 11.8841 12.383 12.2803C11.5971 12.6765 10.9155 13.2515 10.393 13.9589C9.94707 14.6144 9.65591 15.3624 9.5414 16.1465C9.41524 17.0566 9.4623 17.9822 9.68011 18.8749C10.1648 20.9993 11.4748 23.384 13.5732 25.9714C12.2555 27.4348 11.0845 28.4325 9.92769 29.0825C9.17468 29.5239 8.34007 29.809 7.47395 29.9205C6.64065 30.0217 5.79525 29.9111 5.0162 29.599C4.24581 29.2852 3.57092 28.7759 3.05838 28.1217C2.54585 27.4674 2.21345 26.6908 2.09411 25.8689C1.97932 25.0334 2.07701 24.1825 2.37818 23.3946C2.49266 23.0728 2.62663 22.757 2.7926 22.3818C3.0274 21.851 3.27657 21.3115 3.51759 20.7898L3.54996 20.7197C5.75643 15.9419 8.12481 11.0982 10.5894 6.32294L10.6875 6.13283C10.9384 5.64601 11.1979 5.14267 11.4597 4.6563C11.7101 4.15501 12.0132 3.68171 12.3639 3.2444C12.6746 2.86903 13.0646 2.56681 13.5059 2.35934C13.9473 2.15186 14.4291 2.04426 14.9169 2.04422C15.4047 2.04418 15.8866 2.15171 16.3279 2.35911C16.7693 2.56651 17.1593 2.86867 17.4701 3.24399C17.821 3.68097 18.1242 4.15411 18.3744 4.65538C18.6338 5.13742 18.891 5.63623 19.1398 6.11858L19.2452 6.32315C21.7097 11.0979 24.078 15.9415 26.2847 20.7201L26.3046 20.7631C26.5498 21.2936 26.8033 21.8419 27.042 22.382C27.2082 22.7577 27.3424 23.0738 27.4566 23.3944C27.7576 24.1824 27.8553 25.0333 27.7406 25.8689Z" fill="#ff385c"></path>
                    </svg>
                    <p>groundbnb</p>
                </div>
            </a>
            <div className='nav-bar-search-container'>
                <div className="nav-bar-search-btn-container">
                    <button id='nav-bar-search-btn-fake'>
                        <div className='fake-search-label'>Start your search</div>
                        <div className='fake-search-icon'>
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                    </button>
                </div>
            </div>
            <div className="nav-bar-links">
                <a href="https://www.airbnb.com/host/homes">
                    <div className='nav-links-buttons'>
                        Groundbnb your home
                    </div>
                </a>                    
                <div className='nav-bar-lang-btn-container'>
                    <button id='nav-bar-lang-btn'>
                        <svg>
                            <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
                        </svg>
                    </button>
                </div>
                <div className="nav-bar-profile-menu-container">
                    <button id='nav-bar-profile-menu-btn' onClick={toggleProfileMenu} ref={profileMenuBtnRef}>
                        <div className='nav-bar-profile-menu-btn-hamburger'>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </div>
                        <div className='nav-bar-profile-menu-btn-user'>
                            <svg viewBox='0 0 32 32'>
                                <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                            </svg>
                        </div>
                    </button>
                    {isProfileMenuVisible && ( 
                        <div className='profile-menu-container' ref={profileMenuRef}>
                            <div className='profile-menu-top-links-container'>
                                <div className='profile-menu-links bold' onClick={openLoginMenu}>Sign up</div>
                                <div className='profile-menu-links' onClick={openLoginMenu}>Log in</div>
                            </div>
                            <div className="profile-menu-bottom-links-container">
                                <div className='profile-menu-links'>Groundbnb your home</div>
                                <div className='profile-menu-links'>Host an experience</div>
                                <div className='profile-menu-links'>Help</div>
                            </div> 
                        </div>
                    )}
                    {isLoginMenuVisible && (
                        <div className='cover-screen'>
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
                                                    {/*TODO: Form input req'd*/}
                                                </div>
                                            </div>
                                            <div className="login-menu-form-footer">
                                                We'll call or text you to confirm your number. Standard message and data rates apply. <a href="">Privacy Policy</a>
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
                                                <div>Continue with Apple</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>   
        </div> 
    );
}

export default NavBar;