import React from "react";
import { Meta } from '@storybook/react'

// Component
import CountryDetails from '../../../../pages/country/[countryName]'

// Sample Country
import { sampleCountry } from "../../../../constants/sampleCountry";

export default {
    title: 'Components/CountryDetails',
    component: CountryDetails
} as Meta

export const TheCountryDetails = () => <CountryDetails country={sampleCountry} bordersCountries={[sampleCountry]}/>