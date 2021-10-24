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

  const response = await fetch(
    `${apiURL}/name/${encodeURI(countryName)}?fullText=true`
  );
  const country = (await response.json()) as ICountry[];

  if (response.status === 404) {
    return {
      notFound: true,
    };
  }

  const borders = country[0].borders;
  const yawa = borders ? borders.map((item) => item) : [];
  const bordersCountries = (await (
    await fetch(`${apiURL}/alpha/?codes=${yawa},`)
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

  const goToCountry = (country: ICountry) => {
    router.push(`/country/${country.name.common}`, undefined, {
      shallow: false,
    });
  };

  return (
    <S.RootBase>
      <Head>
        <title> Country | {name.common} </title>
      </Head>

      <S.BackBase>
        <S.BackBtn data-testid="bckbtn" onClick={() => router.back()}>
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
          <S.TitleTag data-testid="name">{country.name.common}</S.TitleTag>
          <S.DetailsInfo>
            <S.LeftInfo>
              <S.InfoTag data-testid="nativeName">
                <strong> Native Name: </strong>
                {country.name.official}
              </S.InfoTag>
              <S.InfoTag data-testid="population">
                <strong> Population: </strong>
                {commaNumber(population)}
              </S.InfoTag>
              <S.InfoTag data-testid="region">
                <strong> Region: </strong> {region}
              </S.InfoTag>
              <S.InfoTag data-testid="subRegion">
                <strong> Sub Region: </strong> {subregion}
              </S.InfoTag>
              {capital ? (
                capital.map((item) => {
                  return (
                    <S.InfoTag data-testid="capital" key={item}>
                      <strong> Capital: </strong> {item}
                    </S.InfoTag>
                  );
                })
              ) : (
                <S.InfoTag data-testid="capitalNone">N/A</S.InfoTag>
              )}
            </S.LeftInfo>
            <S.RightInfo>
              <S.InfoTag data-testid="tld">
                <strong> Top Level Domain: </strong>
                {tld ? tld.map((item) => item) : "N/A"}
              </S.InfoTag>
              <S.InfoTag data-testid="curr">
                <strong> Currencies: </strong>
                {/* {currencies
                                    ? `${Object.values(
                                          Object.keys(currencies)
                                      )}${
                                          Object.values(languages).at(-1)
                                              ? ""
                                              : `,`
                                      }`
                                    : "N/A"} */}
              </S.InfoTag>
              <S.InfoTag data-testid="lang">
                <strong> Languages: </strong>{" "}
                {/* {languages
                                    ? `${Object.values(languages)}${
                                          Object.values(languages).at(-1)
                                              ? ""
                                              : `,`
                                      }`
                                    : "N/A"} */}
              </S.InfoTag>
            </S.RightInfo>
          </S.DetailsInfo>
          <S.BorderBase>
            <S.InfoTag>
              <strong> Border Countries: </strong>
            </S.InfoTag>
            <S.BorderCountriesBox>
              {borders && borders.length > 0 ? (
                bordersCountries.map((item) => {
                  return (
                    <S.BorderItem
                      onClick={() => goToCountry(item)}
                      key={item.name.common}
                      data-testid={`border${item.name.common}`}
                    >
                      <S.InfoTag>{item.name.common}</S.InfoTag>
                    </S.BorderItem>
                  );
                })
              ) : (
                <S.BorderItem>
                  <S.InfoTag> N/A </S.InfoTag>
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
