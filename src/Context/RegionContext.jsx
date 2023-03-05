import { createContext, useState, useEffect } from "react";

const RegionContext = createContext();

export const RegionProvider = ({ children }) => {
    const [currencyData, setCurrencyData] = useState([]);

    useEffect(() => {
        const fetchCurrencies = async () => {
            const response = await fetch('http://localhost:3000/currencies');
            // console.log(response)
            const data = await response.json();
            setCurrencyData(data);
        };

        fetchCurrencies();
    }, []) 

    return (
        <RegionContext.Provider value= {{
            currencyData
        }}>
            {children}
        </RegionContext.Provider>
    );
};

export default RegionContext;