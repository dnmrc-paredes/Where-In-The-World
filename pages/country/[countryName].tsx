import React from "react";
import Head from "next/head";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { IoArrowBackOutline } from "react-icons/io5";

// Constants
import { apiURL } from "../../constants/url";

// Types
import { ICountry } from "../../types/interfaces";

// Utils
import { commaNumber } from "../../utils/numComma";

// Styled Components
import {
    RootBase,
    DetailsBase,
    DetailsImgContainer,
    DetailsBaseInfo,
    DetailsInfo,
    LeftInfo,
    RightInfo,
    TitleTag,
    InfoTag,
    BorderBase,
    BorderItem,
    BorderCountriesBox,
    BackBase,
    BackBtn,
} from "../../components/country/countryDetails/countryDetails";

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
        <RootBase>
            <Head>
                <title> Country | {name.common} </title>
            </Head>

            <BackBase>
                <BackBtn data-testid="bckbtn" onClick={() => router.back()}>
                    <IoArrowBackOutline size={20} /> Back
                </BackBtn>
            </BackBase>

            <DetailsBase>
                <DetailsImgContainer>
                    <Image
                        layout="intrinsic"
                        placeholder="blur"
                        blurDataURL={flags.svg}
                        width={450}
                        height={350}
                        src={flags.svg}
                        alt={`${name.common} flag`}
                    />
                </DetailsImgContainer>

                <DetailsBaseInfo>
                    <TitleTag data-testid="name">
                        {country.name.common}
                    </TitleTag>
                    <DetailsInfo>
                        <LeftInfo>
                            <InfoTag data-testid="nativeName">
                                <strong> Native Name: </strong>
                                {country.name.official}
                            </InfoTag>
                            <InfoTag data-testid="population">
                                <strong> Population: </strong>
                                {commaNumber(population)}
                            </InfoTag>
                            <InfoTag data-testid="region">
                                <strong> Region: </strong> {region}
                            </InfoTag>
                            <InfoTag data-testid="subRegion">
                                <strong> Sub Region: </strong> {subregion}
                            </InfoTag>
                            {capital ? (
                                capital.map((item) => {
                                    return (
                                        <InfoTag
                                            data-testid="capital"
                                            key={item}
                                        >
                                            <strong> Capital: </strong> {item}
                                        </InfoTag>
                                    );
                                })
                            ) : (
                                <InfoTag data-testid="capitalNone">N/A</InfoTag>
                            )}
                        </LeftInfo>
                        <RightInfo>
                            <InfoTag data-testid="tld">
                                <strong> Top Level Domain: </strong>
                                {tld ? tld.map((item) => item) : "N/A"}
                            </InfoTag>
                            <InfoTag data-testid="curr">
                                <strong> Currencies: </strong>
                                {currencies
                                    ? `${Object.values(
                                          Object.keys(currencies)
                                      )}${
                                          Object.values(languages).at(-1)
                                              ? ""
                                              : `,`
                                      }`
                                    : "N/A"}
                            </InfoTag>
                            <InfoTag data-testid="lang">
                                <strong> Languages: </strong>{" "}
                                {languages
                                    ? `${Object.values(languages)}${
                                          Object.values(languages).at(-1)
                                              ? ""
                                              : `,`
                                      }`
                                    : "N/A"}
                            </InfoTag>
                        </RightInfo>
                    </DetailsInfo>
                    <BorderBase>
                        <InfoTag>
                            <strong> Border Countries: </strong>
                        </InfoTag>
                        <BorderCountriesBox>
                            {borders && borders.length > 0 ? (
                                bordersCountries.map((item) => {
                                    return (
                                        <BorderItem
                                            onClick={() => goToCountry(item)}
                                            key={item.name.common}
                                            data-testid={`border${item.name.common}`}
                                        >
                                            <InfoTag>
                                                {item.name.common}
                                            </InfoTag>
                                        </BorderItem>
                                    );
                                })
                            ) : (
                                <BorderItem>
                                    <InfoTag> N/A </InfoTag>
                                </BorderItem>
                            )}
                        </BorderCountriesBox>
                    </BorderBase>
                </DetailsBaseInfo>
            </DetailsBase>
        </RootBase>
    );
};

export default CountryPage;
