import React from "react";
import Head from "next/head";
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'

// Constants
import { apiURL } from "../../constants/url";

// Types
import { ICountry } from "../../types/interfaces";

// Utils
import { commaNumber } from "../../utils/numComma";

// Styled Components
import { RootBase, DetailsBase, DetailsImgContainer, DetailsBaseInfo, DetailsInfo, LeftInfo, RightInfo, TitleTag, InfoTag, BorderBase, BorderItem, BorderCountriesBox } from "../../components/country/countryDetails/countryDetails";

export const getStaticPaths: GetStaticPaths = async () => {

    const allCountries = await (await fetch(`${apiURL}/all`)).json() as ICountry[]
    const paths = allCountries.map(item => {
        return { params: { countryName: item.cca3 } }
    })

    return {
        paths,
        fallback: 'blocking'
    }

}

export const getStaticProps: GetStaticProps = async ({params}) => {

    const { countryName } = params as { countryName: string }
    const country = await (await fetch(`${apiURL}/alpha/${countryName}`)).json() as ICountry[]

    return {
        props: {
            country: country[0]
        },
        revalidate: 5
    }

}

const CountryPage: NextPage<{country: ICountry}> = ({country}) => {

    const { borders, capital, flags, languages, name, population, region, subregion, tld, currencies } = country

    return (
        <RootBase>

            <Head>
                <title> Country | {name.common} </title>
            </Head>

            <DetailsBase>

                <DetailsImgContainer>
                    <Image layout="intrinsic" width={450} height={350} src={flags.svg} alt={`${name.common} flag`} />
                </DetailsImgContainer>

                <DetailsBaseInfo>
                    <TitleTag> {country.name.common} </TitleTag>
                    <DetailsInfo>
                        <LeftInfo>
                            <InfoTag> <strong> Native Name: </strong> {country.name.official} </InfoTag>
                            <InfoTag> <strong> Population: </strong> {commaNumber(population)} </InfoTag>
                            <InfoTag> <strong> Region: </strong> {region} </InfoTag>
                            <InfoTag> <strong> Sub Region: </strong> {subregion} </InfoTag>
                            { capital ? capital.map(item => {
                                return <InfoTag key={item}> <strong> Capital: </strong> {item} </InfoTag>
                            }) : <InfoTag> N/A </InfoTag> }
                        </LeftInfo>
                        <RightInfo>
                            <InfoTag> <strong> Top Level Domain: </strong> { tld ? tld.map(item => item ) : 'N/A' } </InfoTag>
                            <InfoTag> <strong> Currencies: </strong> {Object.values(Object.keys(currencies))} {Object.values(languages).at(-1) ? null : ` ,`} </InfoTag>
                            <InfoTag> <strong> Languages: </strong> {`${Object.values(languages)}`} {Object.values(languages).at(-1) ? null : ` ,`} </InfoTag>                    
                        </RightInfo>
                    </DetailsInfo>
                    <BorderBase>
                        <InfoTag>
                            <strong> Border Countries: </strong>
                        </InfoTag>
                        <BorderCountriesBox>
                            { borders ? borders.map(item => {
                                    return <BorderItem key={item}>
                                        <InfoTag> {item} </InfoTag>
                                    </BorderItem>
                            }) : <InfoTag> N/A </InfoTag> }
                        </BorderCountriesBox>
                    </BorderBase>
                </DetailsBaseInfo>

            </DetailsBase>

        </RootBase>
    )

}

export default CountryPage