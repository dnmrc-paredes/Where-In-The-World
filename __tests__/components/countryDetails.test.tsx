import React from "react";
import { render } from "@testing-library/react";

// Utils
import { commaNumber } from "../../utils/numComma";

// Page
import CountryPage from "../../pages/country/[countryName]";

// Sample Data
import { sampleCountry } from '../../constants/sampleCountry'

describe('Country details page', () => {

    it('Will render the details page', () => {
        
        const { getByTestId } = render(<CountryPage country={sampleCountry} bordersCountries={[sampleCountry]} />)
        const name = getByTestId('name')
        const nativeName = getByTestId('nativeName')
        const population = getByTestId('population')
        const region = getByTestId('region')
        const subRegion = getByTestId('subRegion')
        const capital = getByTestId('capital')
        const tld = getByTestId('tld')
        const curr = getByTestId('curr')
        const lang = getByTestId('lang')

        expect(name.innerHTML).toBe('Canada')
        expect(nativeName.innerHTML).toBe('<strong> Native Name: </strong>Canada')
        expect(population.innerHTML).toBe(`<strong> Population: </strong>${commaNumber(sampleCountry.population)}`)
        expect(region.innerHTML).toBe('<strong> Region: </strong> Americas')
        expect(subRegion.innerHTML).toBe('<strong> Sub Region: </strong> North America')
        expect(capital.innerHTML).toBe('<strong> Capital: </strong> Ottawa')
        expect(tld.innerHTML).toBe('<strong> Top Level Domain: </strong>.ca')
        expect(curr.innerHTML).toBe('<strong> Currencies: </strong>CAD')
        expect(lang.innerHTML).toBe('<strong> Languages: </strong> English,French')
        
    })

})