import { useContext } from 'react';
import NavContext from '../Context/NavContext';
import './LangMenu.css';

function LangMenu() {
    const {langMenuRef, closeLangMenu} = useContext(NavContext);

    return ( 
        <div className='cover-screen'>
            <div className='lang-menu-container' ref={langMenuRef}>
            </div>
        </div>
    );
}

export default LangMenu;