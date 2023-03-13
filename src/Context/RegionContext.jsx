import { createContext, useState, useEffect } from "react";

const RegionContext = createContext();

export const RegionProvider = ({ children }) => {
    const [currencyData, setCurrencyData] = useState([]);
    const [languageData, setLanguageData] = useState([]);

    useEffect(() => {
        const fetchCurrencies = async () => {
            const response = await fetch('http://localhost:3000/currencies');
            const data = await response.json();
            setCurrencyData(data);
        };

        fetchCurrencies();
    }, []) 

    useEffect(() => {
        const fetchLanguages = async () => {
            const response = await fetch('http://localhost:3000/languages');
            const data = await response.json();
            setLanguageData(data);
        };

        fetchLanguages();
    }, []) 

    return (
        <RegionContext.Provider value= {{
            currencyData,
            languageData
        }}>
            {children}
        </RegionContext.Provider>
    );
};

export default RegionContext;