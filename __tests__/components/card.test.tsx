import React from "react";
import { render } from '@testing-library/react'
import { CountryCard } from "../../components/country/card/card";

// Utils
import { commaNumber } from "../../utils/numComma";

// Sample Data
import { sampleCountry } from '../../constants/sampleCountry'

describe('The country card', () => {

    it('Will display all the card details', () => {

        const { getByTestId } = render(<CountryCard
            name={sampleCountry.name.common}
            capital={sampleCountry.capital}
            cca3={sampleCountry.cca3}
            img={sampleCountry.flags.png}
            population={sampleCountry.population}
            region={sampleCountry.region}
        />)

        const name = getByTestId('countryName')
        const population = getByTestId('countryPopulation')
        const region = getByTestId('countryRegion')
        const capital = getByTestId('countryCapital')

        expect(name.innerHTML).toBe('Canada')
        expect(population.innerHTML).toEqual(`<strong> Population: </strong> ${commaNumber(sampleCountry.population)}`)
        expect(region.innerHTML).toBe('<strong> Region: </strong> Americas')
        expect(capital.innerHTML).toBe('<strong> Capital: </strong> Ottawa')

    })

})