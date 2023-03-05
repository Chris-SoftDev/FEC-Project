import { useContext } from 'react';
import RegionContext from '../Context/RegionContext';
import './Region.css'

function Region() {
    const { languageData } = useContext(RegionContext);

    return ( 
        <>
            <div className="translation-container">

            </div>
            <div className="language-region-header">
                    Choose a language and region
            </div>
            <ul className='language-region-list'>
                {languageData.map(obj => (
                    <li key={obj.language_id}>
                        <button id={obj.currency_id}>
                            <div className='language-name'>{obj.language}</div>
                            <div className='language-country'>{obj.country}</div>
                        </button>
                    </li>
                ))}              
            </ul>
        </>
    );
}

export default Region;