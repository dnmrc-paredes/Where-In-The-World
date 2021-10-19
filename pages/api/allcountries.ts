import { NextApiHandler } from 'next'
import { apiURL } from '../../constants/url'
import { ICountry } from '../../types/interfaces'

const allCountries: NextApiHandler = async (req, res) => {

    const allCountriesData = await (await fetch(`${apiURL}/all`)).json() as ICountry[]

    res.send(allCountriesData)

}

export default allCountries