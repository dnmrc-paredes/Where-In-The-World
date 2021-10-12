import React from "react";
import { Meta } from '@storybook/react'

// Component
import { CountryCard } from "../../../../components/country/card/card";

// Sample Country
import { sampleCountry } from "../../../../constants/sampleCountry";

export default {
    title: 'Components/Country',
    component: CountryCard
} as Meta

export const TheCountryCard = () => {

    return (
        <CountryCard
            name={sampleCountry.name.common}
            capital={sampleCountry.capital}
            cca3={sampleCountry.cca3}
            img={sampleCountry.flags.png}
            population={sampleCountry.population}
            region={sampleCountry.region}
        >
        </CountryCard>
    )

}