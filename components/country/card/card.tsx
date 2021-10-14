import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

// Utils
import { commaNumber } from "../../../utils/numComma";

// Types
type Props = {
    name: string;
    population: number;
    region: string;
    capital: string[];
    img: string;
    cca3: string;
};

// Styled Components
import {
    Card,
    CountryDetails,
    CountryInfo,
    Title,
    ImageHolder,
    Detail,
} from "./cardStyles";

export const CountryCard: FC<Props> = (props) => {
    const { name, population, region, capital, img } = props;

    return (
        <Link passHref href={`/country/${name}`}>
            <Card data-testid={`country${name}`} >
                <ImageHolder>
                    <Image
                        placeholder="blur"
                        blurDataURL={img}
                        height={150}
                        width={250}
                        alt={name}
                        src={img}
                    />
                </ImageHolder>
                <CountryInfo>
                    <CountryDetails>
                        <Title data-testid="countryName">
                            {name.length < 15 ? name : `${name.substring(0, 15)}...`}
                        </Title>
                        <Detail data-testid="countryPopulation">
                            <strong> Population: </strong> {commaNumber(population)}
                        </Detail>
                        <Detail data-testid="countryRegion">
                            <strong> Region: </strong> {region}
                        </Detail>
                        {capital ? (
                            <Detail data-testid="countryCapital">
                                <strong> Capital: </strong> {capital[0]}
                            </Detail>
                        ) : (
                            <Detail data-testid="countryCapitalNone">
                                <strong> Capital: </strong> N/A
                            </Detail>
                        )}
                    </CountryDetails>
                </CountryInfo>
            </Card>
        </Link>
    );
};
