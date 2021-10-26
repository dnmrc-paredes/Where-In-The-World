import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import * as S from "./cardStyles";
import { commaNumber } from "../../../utils/numComma";

type Props = {
  name: string;
  population: number;
  region: string;
  capital: string[];
  img: string;
  cca3: string;
};

export const CountryCard = (props: Props) => {
  const { name, population, region, capital, img } = props;

  return (
    <Link passHref href={`/country/${name}`}>
      <S.Card data-testid={`country${name}`}>
        <Image
          placeholder="blur"
          blurDataURL={img}
          height={150}
          width={250}
          alt={name}
          src={img}
        />
        <S.CountryInfo>
          <S.CountryDetails>
            <S.Title data-testid="countryName">
              {name.length < 15 ? name : `${name.substring(0, 15)}...`}
            </S.Title>
            <S.Detail data-testid="countryPopulation">
              <strong> Population: </strong> {commaNumber(population)}
            </S.Detail>
            <S.Detail data-testid="countryRegion">
              <strong> Region: </strong> {region}
            </S.Detail>
            {capital ? (
              <S.Detail data-testid="countryCapital">
                <strong> Capital: </strong> {capital[0]}
              </S.Detail>
            ) : (
              <S.Detail data-testid="countryCapitalNone">
                <strong> Capital: </strong> N/A
              </S.Detail>
            )}
          </S.CountryDetails>
        </S.CountryInfo>
      </S.Card>
    </Link>
  );
};
