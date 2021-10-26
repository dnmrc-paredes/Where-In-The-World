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
            <h1>{name.length < 15 ? name : `${name.substring(0, 15)}...`}</h1>
            <p> <strong>Population:</strong> {commaNumber(population)} </p>
            <p> <strong>Region:</strong>  {region} </p>
            <p> <strong>Capital:</strong>  {capital ? capital[0] : "N/A"} </p>
          </div>
        </S.CountryInfo>
      </S.Card>
    </Link>
  );
};
