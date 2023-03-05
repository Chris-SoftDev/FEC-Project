import './Currency.css'

function Currency() {
    return ( 
        <>
            <div className="currency-header">
                Choose a currency
            </div>
            <ul className='currency-list'>
                <li>
                    <button>
                        <div className='currency-name'>United States Dollar</div>
                        <div className='currency-type'>USD - $</div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className='currency-name'>Australian Dollar</div>
                        <div className='currency-type'>AUD - $</div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className='currency-name'>Brazilian real</div>
                        <div className='currency-type'>BRL - R$</div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className='currency-name'>Bulgarian lev</div>
                        <div className='currency-type'>BGN - лв.</div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className='currency-name'>Canadian Dollar</div>
                        <div className='currency-type'>CAD - $</div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className='currency-name'>Chilean peso</div>
                        <div className='currency-type'>CLP - $</div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className='currency-name'>Chinese yuan</div>
                        <div className='currency-type'>CNY - ￥</div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className='currency-name'>Coloumbian peso</div>
                        <div className='currency-type'>COP - $</div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className='currency-name'>Costa Rucan colon</div>
                        <div className='currency-type'>CRC - ₡</div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className='currency-name'>Croatian kuna</div>
                        <div className='currency-type'>HRK - kn</div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className='currency-name'>Czech koruna</div>
                        <div className='currency-type'>CZK - Kč</div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className='currency-name'>Danish krone</div>
                        <div className='currency-type'>DKK - kr</div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className='currency-name'>Emirati dirham</div>
                        <div className='currency-type'>AED - ﺩ.ﺇ</div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className='currency-name'>Euro</div>
                        <div className='currency-type'>EUR - €</div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className='currency-name'>Hong Kong dollar</div>
                        <div className='currency-type'>HKD - $</div>
                    </button>
                </li>
    
            </ul>
        </>
    );
}

export default Currency;