import { useContext } from 'react';
import NavContext from '../Context/NavContext';
import './ProfileMenu.css'

function ProfileMenu() {
    const {profileMenuRef, openLoginMenu} = useContext(NavContext);

    return (
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
    );
}

export default ProfileMenu;