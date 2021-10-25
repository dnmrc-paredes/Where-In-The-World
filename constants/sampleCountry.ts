import { Country } from "../types/interfaces";

export const sampleCountry = {
    name: {
        common: "Canada",
        official: "Canada",
        nativeName: {
            eng: {
                official: "Canada",
                common: "Canada"
            }
        }
    },
    tld: [
        ".ca"
    ],
    cca3: "CAN",
    cca2: "CA",
    currencies: {
        CAD: {
            name: "Canadian dollar",
            symbol: "$"
        }
    },
    capital: [
        "Ottawa"
    ],
    region: "Americas",
    subregion: "North America",
    languages: {
        eng: "English",
        fra: "French"
    },
    landlocked: false,
    borders: [
        "USA"
    ],
    population: 38005238,
    flags: {
        svg: "https://flagcdn.com/ca.svg",
        png: "https://flagcdn.com/w320/ca.png"
    }
} as Country