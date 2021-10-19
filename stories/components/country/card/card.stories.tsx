import React from "react";
import { Meta } from '@storybook/react'

// Component
import { Card } from "../../../../components/country/card/card";

// Sample Country
import { sampleCountry } from "../../../../constants/sampleCountry";

export default {
    title: 'Components/Country',
    component: Card
} as Meta

export const Card = () => {

    return (
        <Card
            name={sampleCountry.name.common}
            capital={sampleCountry.capital}
            cca3={sampleCountry.cca3}
            img={sampleCountry.flags.png}
            population={sampleCountry.population}
            region={sampleCountry.region}
        >
        </Card>
    )

}