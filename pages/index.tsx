import { useState } from "react";
import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import * as S from "../styles/rootPageStyles";
import { apiURL } from "../constants/url";
import { CountryCard } from "../components/country/card/card";
import { SearchbarComponent } from "../components/searchbar/searchbar";
import { FilterDropdown } from "../components/filterDropdown/filterDropdown";
import { ICountry } from "../types/interfaces";
type Props = {
  allCountries: ICountry[];
};

export const getStaticProps: GetStaticProps = async () => {
  const allCountries = (await (
    await fetch(`${apiURL}/all`)
  ).json()) as ICountry[];

  return {
    props: {
      allCountries,
    },
  };
};

const Home: NextPage<Props> = ({ allCountries }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const filterOrSearch = () => {
    if (filter) {
      return allCountries
        .filter((item) => !item.name.common.search(new RegExp(search, "ig")))
        .filter((country) => country.region === filter);
    }
    return allCountries.filter(
      (item) => !item.name.common.search(new RegExp(search, "ig"))
    );
  };

  return (
    <div>
      <Head>
        <title> Where In The World </title>
        <meta name="description" content="Search for a country" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Base>
        <S.Options>
          <SearchbarComponent value={search} setValue={setSearch} />
          <FilterDropdown setValue={setFilter} />
        </S.Options>

        <S.Countries>
          {filterOrSearch().length <= 0 ? (
            <S.NoResultsBase>
              <S.NoResultHeading> No Countries found </S.NoResultHeading>
            </S.NoResultsBase>
          ) : (
            filterOrSearch().map((country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  img={country.flags.png}
                  cca3={country.cca3}
                />
              );
            })
          )}
        </S.Countries>
      </S.Base>
    </div>
  );
};

export default Home;
