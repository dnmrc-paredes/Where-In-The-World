import React from "react";
import Head from "next/head";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { IoArrowBackOutline } from "react-icons/io5";
import { apiURL } from "../../constants/url";
import { ICountry } from "../../types/interfaces";
import { commaNumber } from "../../utils/numComma";
import * as S from "../../components/country/countryDetails/countryDetails";

export const getStaticPaths: GetStaticPaths = async () => {
  const allCountries = (await (
    await fetch(`${apiURL}/all`)
  ).json()) as ICountry[];
  const paths = allCountries.map((item) => {
    return { params: { countryName: item.name.common } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { countryName } = params as { countryName: string };

  const country = (await (
    await fetch(`${apiURL}/name/${encodeURI(countryName)}?fullText=true`)
  ).json()) as ICountry[];
  const borders = country[0].borders;
  const countryURL = borders && borders.map((item) => item);
  const bordersCountries = (await (
    await fetch(`${apiURL}/alpha/?codes=${countryURL},`)
  ).json()) as ICountry[];

  return {
    props: {
      country: country[0],
      bordersCountries,
    },
    revalidate: 5,
  };
};

const CountryPage: NextPage<{
  country: ICountry;
  bordersCountries: ICountry[];
}> = ({ country, bordersCountries }) => {
  const {
    borders,
    capital,
    flags,
    languages,
    name,
    population,
    region,
    subregion,
    tld,
    currencies,
  } = country;
  const router = useRouter();
  return (
    <S.RootBase>
      <Head>
        <title> Country | {name.common} </title>
      </Head>

      <S.BackBase>
        <S.BackBtn onClick={() => router.back()}>
          <IoArrowBackOutline size={20} /> Back
        </S.BackBtn>
      </S.BackBase>

      <S.DetailsBase>
        <S.DetailsImgContainer>
          <Image
            layout="intrinsic"
            placeholder="blur"
            blurDataURL={flags.svg}
            width={450}
            height={350}
            src={flags.svg}
            alt={`${name.common} flag`}
          />
        </S.DetailsImgContainer>

        <S.DetailsBaseInfo>
          <S.TitleTag> {country.name.common} </S.TitleTag>
          <S.DetailsInfo>
            <span>
              <p>
                <strong> Native Name: </strong> {country.name.official}
              </p>
              <p>
                <strong> Population: </strong> {commaNumber(population)}
              </p>
              <p>
                <strong> Region: </strong> {region}
              </p>
              <p>
                <strong> Sub Region: </strong> {subregion}
              </p>
              {capital ? (
                capital.map((item) => {
                  return (
                    <p key={item}>
                      <strong> Capital: </strong> {item}
                    </p>
                  );
                })
              ) : (
                <p> N/A </p>
              )}
            </span>
            <span className="right">
              <p>
                <strong> Top Level Domain: </strong>
                {tld ? tld.map((item) => item) : "N/A"}
              </p>
              <p>
                <strong> Currencies: </strong>
                {currencies
                  ? `${Object.values(Object.keys(currencies))} ${
                      Object.values(currencies) ? "" : ` ,`
                    }`
                  : "N/A"}
              </p>
              <p>
                <strong> Languages: </strong>
                {languages
                    ? `${Object.values(languages)} ${
                      Object.values(languages) ? "" : ` ,`
                    } `
                  : "N/A"}{" "}
              </p>
            </span>
          </S.DetailsInfo>
          <S.BorderBase>
            <p>
              <strong> Border Countries: </strong>
            </p>
            <S.BorderCountriesBox>
              {borders && borders.length > 0 ? (
                bordersCountries.map((item) => {
                  return (
                    <S.BorderItem
                      onClick={() => {
                        router.push(`/country/${item.name.common}`, undefined, {
                          shallow: false,
                        });
                      }}
                      key={item.name.common}
                    >
                      <p> {item.name.common} </p>
                    </S.BorderItem>
                  );
                })
              ) : (
                <S.BorderItem>
                  <p> N/A </p>
                </S.BorderItem>
              )}
            </S.BorderCountriesBox>
          </S.BorderBase>
        </S.DetailsBaseInfo>
      </S.DetailsBase>
    </S.RootBase>
  );
};

export default CountryPage;
