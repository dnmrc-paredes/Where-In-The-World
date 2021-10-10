import { useState } from 'react'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'

// Styles
import styles from '../styles/Home.module.css'

// Styled Components
import { NoResultHeading, NoResultsBase } from '../styles/rootPageStyles'

// Constants
import { apiURL } from '../constants/url'

// Components
import { CountryCard } from '../components/country/card/card'
import { SearchbarComponent } from '../components/searchbar/searchbar'
import { FilterDropdown } from '../components/filterDropdown/filterDropdown'

// Types
import { ICountry } from '../types/interfaces'
type Props = {
  allCountries: ICountry[]
}

export const getStaticProps: GetStaticProps = async () => {

  const allCountries = await (await fetch(`${apiURL}/all`)).json() as ICountry[]
  
  return {
    props: {
      allCountries
    }
  }

}

const Home: NextPage<Props> = ({ allCountries }) => {

  const [search, setSearch] = useState('')

  const filterOrSearch = () => {

    if (search) {
      return allCountries.filter(item => !item.name.common.search(new RegExp(search, 'ig')))
    }

    return allCountries

  }

  return (
    <div className={styles.container}>
      <Head>
        <title> Where In The World </title>
        <meta name="description" content="Search for a country" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.options}>
          <SearchbarComponent value={search} setValue={setSearch} />
          <FilterDropdown/>
        </div>

        <div className={styles.countries}>
          { filterOrSearch().length <= 0 ? 
            <NoResultsBase>
                <NoResultHeading> No Countries found </NoResultHeading>
            </NoResultsBase>
           : filterOrSearch().map(country => {
            return <CountryCard
                      key={country.name.common}
                      name={country.name.common}
                      population={country.population}
                      region={country.region}
                      capital={country.capital}
                      img={country.flags.png}
                      cca3={country.cca3}
                    />
            }) }
        </div>

      </main>
    </div>
  )
  
}

export default Home
