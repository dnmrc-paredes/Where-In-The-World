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
    capital: string[],
    population: number,
    region: string,
    subregion: string,
    languages: {
        [key: string]: string
    },
    borders: string[],
    flags: {
        svg: string,
        png: string
    }
}