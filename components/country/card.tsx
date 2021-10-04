import React, { FC } from "react";
import Image from 'next/image'
import styled from 'styled-components'

// Types
type Props = {
    name: string
    population: number
    region: string
    capital: string[]
    img: string
}

const Title = styled.h1`
    font-size: 50px;
    color: blue;
`

export const CountryCard: FC<Props> = (props) => {

    const { name, population, region, capital, img } = props

    return (
        <section>
            {/* <Image height={100} width={150} alt={name} src={img} /> */}
            {/* <h1> {name} </h1> */}
            <Title> {name} </Title>
            <p> {population} </p>
            <p> {region} </p>
            { capital ? capital.map(item => {
                return <p key={item}> {item} </p>
            }) : <p> N/A </p> }
        </section>
    )

}
