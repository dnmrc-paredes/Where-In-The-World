import React from "react";
import { Meta } from '@storybook/react'

// Component
import CountryDetailsComponent from '../../../../pages/country/[countryName]'

// Sample Country
import { sampleCountry } from "../../../../constants/sampleCountry";

export default {
    title: 'Components/Country',
    component: CountryDetailsComponent
} as Meta

export const CountryDetails = () => <CountryDetailsComponent country={sampleCountry} bordersCountries={[sampleCountry]}/>