import { DefaultTheme } from "styled-components"
export const lightMode = {
    bg: 'hsl(0, 0%, 98%)',
    txtColor: 'hsl(200, 15%, 8%)',
    inputColor: 'hsl(0, 0%, 52%)',
    elements: 'hsl(0, 0%, 100%)'
} as DefaultTheme

export const darkMode = {
    bg: 'hsl(207, 26%, 17%)',
    txtColor: 'hsl(0, 0%, 100%)',
    inputColor: 'hsl(0, 0%, 52%)',
    elements: 'hsl(209, 23%, 22%)'
} as DefaultTheme

export const theme = {
    lightMode,
    darkMode
}