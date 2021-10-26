import React, { useState } from "react";
import { Meta } from '@storybook/react'

import '../../../styles/globals.css'

// Component
import { Header as HeaderComponent } from '../../../components/header/header'

export default {
    title: 'Components/Header',
    component: HeaderComponent
} as Meta

export const Navbar = () => {

    const [value, setValue] = useState<'light' | 'dark' | undefined>('light')

    return (
        <HeaderComponent changeTheme={setValue} value={value}> </HeaderComponent>
    )

}