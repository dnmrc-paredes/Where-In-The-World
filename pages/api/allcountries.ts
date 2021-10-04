import { NextApiHandler } from 'next'

// Constants
import { apiURL } from '../../constants/url'

// Types
import { ICountry } from '../../types/interfaces'

const allCountries: NextApiHandler = async (req, res) => {

    const allCountriesData = await (await fetch(`${apiURL}/all`)).json() as ICountry[]

    res.send(allCountriesData)

}

export default allCountries