import React, { FC } from "react";
import Image from 'next/image'
import { useRouter } from 'next/router'

// Utils
import { commaNumber } from '../../../utils/numComma'

// Types
type Props = {
    name: string
    population: number
    region: string
    capital: string[]
    img: string
}

// Styled Components

import { Card, CountryDetails, CountryInfo, Title, ImageHolder, Detail } from "./cardStyles";

export const CountryCard: FC<Props> = (props) => {

    const { name, population, region, capital, img } = props

    const router = useRouter()

    const goToCountry = (name: string) => {
        router.push(`/country/${name}`)
    }

    return (
        <Card onClick={() => goToCountry(name)}>
            <ImageHolder>
                <Image placeholder="blur" blurDataURL={img} height={150} width={250} alt={name} src={img} />
            </ImageHolder>
            <CountryInfo>
                <CountryDetails>
                    <Title> {name} </Title>
                    <Detail> Population: {commaNumber(population)} </Detail>
                    <Detail> Region: {region} </Detail>
                    { capital ? 
                    <Detail> Capital: {capital[0]} </Detail>
                    : <Detail> Capital: N/A </Detail> }
                </CountryDetails>
            </CountryInfo>
        </Card>
    )

}
