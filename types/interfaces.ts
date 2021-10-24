export interface ICountry {
    name: {
        common: string,
        official: string
        nativeName: {
            spa: {
                official: string,
                common: string
            }
        }
    },
    tld: string[],
    cca2: string,
    cca3: string,
    capital: string[],
    population: number,
    region: string,
    subregion: string,
    languages: {},
    borders: string[],
    flags: {
        svg: string,
        png: string
    }
    currencies: {}
}