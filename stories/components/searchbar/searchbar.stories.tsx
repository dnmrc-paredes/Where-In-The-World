import React, { useState } from "react";
import { Meta } from '@storybook/react'
import { useTheme } from "styled-components";

import '../../../styles/globals.css'

// Component
import { SearchbarComponent } from '../../../components/searchbar/searchbar'

export default {
    title: 'Components/Searchbar',
    component: SearchbarComponent
} as Meta

export const TheSearchBar = () => {

    const theme = useTheme() as { txtColor: string }
    const [value, setValue] = useState('')
    

    return (
        <SearchbarComponent value={value} setValue={setValue}>
        </SearchbarComponent>
    )

}