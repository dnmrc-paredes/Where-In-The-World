import React, { FC } from "react";
import Image from 'next/image'
import styled from 'styled-components'

// Utils
import { commaNumber } from '../../utils/numComma'

// Types
type Props = {
    name: string
    population: number
    region: string
    capital: string[]
    img: string
}

// Styled Components

const Card = styled.div`
    height: 330px;
    width: 250px;
    border-radius: 5px;
    margin: 40px;
    overflow: hidden;
    box-shadow: 0px 3px 15px 2px #EDEDED;
    background-color: white;
`

const Title = styled.h1`
    font-size: 20px;
    margin-bottom: 10px;
`

const Detail = styled.p`
    margin: 2px 0;
`

const ImageHolder = styled.div`
    flex: 1;
    display: flex;
    height: 150px;
`

const CountryInfo = styled.section`
    flex: 2;
    display: flex;
    justify-content: center;
    height: 170px;
    /* background-color: yellow; */
`

const CountryDetails = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* background-color: red; */
    margin: auto 25px;
`

export const CountryCard: FC<Props> = (props) => {

    const { name, population, region, capital, img } = props

    return (
        <Card>
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
