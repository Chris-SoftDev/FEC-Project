import { useContext } from 'react'
import RegionContext from '../../Context/RegionContext'
import './FooterCurrency.css'


function FooterCurrencyMenu() {
    const { currencyData } = useContext(RegionContext)

    return ( 
        <>
            <div className="footer-currency-header">
                    Choose a currency
            </div>
            <ul className='footer-currency-list'>
                {currencyData.map(obj => (
                    <li key={obj.currency_id}>
                        <button id={obj.currency_id}>
                            <div className='footer-currency-name'>{obj.currency}</div>
                            <div className='footer-currency-symbol'>{obj.symbol}</div>
                        </button>
                    </li>
                ))}              
            </ul>
        </>     
    );
}

export default FooterCurrencyMenu;