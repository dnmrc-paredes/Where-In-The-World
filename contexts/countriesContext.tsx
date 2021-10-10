import { createContext, FC, useContext, useState, useEffect } from "react";

// Types
import { ICountry } from "../types/interfaces";

// Constants
import { apiURL } from "../constants/url";

const CountriesContext = createContext({})

export const AllCountriesProvider: FC = ({children}) => {

    const [data, setData] = useState<ICountry[]>([])

    const getData = async () => {
        const allCountries = await (await fetch(`${apiURL}/all`)).json() as ICountry[]
        setData(allCountries)
        return allCountries
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <CountriesContext.Provider value={data}>
            {children}
        </CountriesContext.Provider>
    )

}

export const useAllCountries = () => useContext(CountriesContext)