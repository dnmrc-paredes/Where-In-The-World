import React from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'

// Constants
import { apiURL } from "../../constants/url";

// Types
import { ICountry } from "../../types/interfaces";

export const getStaticPaths: GetStaticPaths = async () => {

    const allCountries = await (await fetch(`${apiURL}/all`)).json() as ICountry[]
    const paths = allCountries.map(item => {
        return { params: { countryName: item.name.common } }
    })

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps: GetStaticProps = async ({params}) => {

    const { countryName } = params as { countryName: string }

    const country = await (await fetch(`${apiURL}/name/${countryName}?fullText=true`)).json() as ICountry[]

    return {
        props: {
            country: country[0]
        }
    }

}

const CountryPage: NextPage<{country: ICountry}> = ({country}) => {

    return (
        <h1> {country.name.common} </h1>
    )

}

export default CountryPage