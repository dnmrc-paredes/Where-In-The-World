import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { commaNumber } from "../../../utils/numComma";
import * as S from "./cardStyles";
type Props = {
    name: string;
    population: number;
    region: string;
    capital: string[];
    img: string;
    cca3: string;
  };
export const CountryCard: FC<Props> = (props) => {
  const { name, population, region, capital, img } = props;

  return (
    <Link passHref href={`/country/${name}`}>
      <S.Card>
          <Image
            placeholder="blur"
            blurDataURL={img}
            height={150}
            width={250}
            alt={name}
            src={img}
          />
        <S.CountryInfo>
          <div>
            <h1>
              {name.length < 15 ? name : `${name.substring(0, 15)}...`}
            </h1>
            <p> Population: {commaNumber(population)} </p>
            <p> Region: {region} </p>
            {capital ? (
              <p> Capital: {capital[0]} </p>
            ) : (
              <p> Capital: N/A </p>
            )}
          </div>
        </S.CountryInfo>
      </S.Card>
    </Link>
  );
};
