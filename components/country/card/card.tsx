import React, { FC } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { commaNumber } from '../../../utils/numComma'
type Props = {
    name: string
    population: number
    region: string
    capital: string[]
    img: string
    cca3: string
}
import * as S from "./cardStyles";

export const CountryCard: FC<Props> = (props) => {

    const { name, population, region, capital, img } = props

    return (
        <Link passHref href={`/country/${name}`}>
            <S.Card>
                <S.ImageHolder>
                    <Image placeholder="blur" blurDataURL={img} height={150} width={250} alt={name} src={img} />
                </S.ImageHolder>
                <S.CountryInfo>
                    <S.CountryDetails>
                        <S.Title> {name.length < 15 ? name : `${name.substring(0,15)}...`} </S.Title>
                        <S.Detail> Population: {commaNumber(population)} </S.Detail>
                        <S.Detail> Region: {region} </S.Detail>
                        { capital ? 
                        <S.Detail> Capital: {capital[0]} </S.Detail>
                        : <S.Detail> Capital: N/A </S.Detail> }
                    </S.CountryDetails>
                </S.CountryInfo>
            </S.Card>
        </Link>
    )

}
