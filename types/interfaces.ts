export interface ICountry {
    name: {
        common: string
        official: string
        nativeName: {
            [key: string]: {
                official: string
                common: string
            }
        }
    },
    tld: string[]
    cca2: string
    cca3: string
    capital: string[]
    population: number
    region: string
    subregion: string
    languages: anyKey
    borders: string[]
    flags: {
        svg: string
        png: string
    }
    currencies: {
        [key: string]: {
            name: string
            symbol: string
        }
    }
}

export type anyKey = {
    [key: string]: string
}