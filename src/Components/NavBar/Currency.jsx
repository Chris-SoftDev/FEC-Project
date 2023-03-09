import { useContext } from 'react';
import RegionContext from '../../Context/RegionContext';
import './Currency.css'

function Currency() {
    const { currencyData } = useContext(RegionContext);

    return (
        <>
            <div className="currency-header">
                    Choose a currency
            </div>
            <ul className='currency-list'>
                {currencyData.map(obj => (
                    <li key={obj.currency_id}>
                        <button id={obj.currency_id}>
                            <div className='currency-name'>{obj.currency}</div>
                            <div className='currency-symbol'>{obj.symbol}</div>
                        </button>
                    </li>
                ))}              
            </ul>
        </>         
    );
}

export default Currency;