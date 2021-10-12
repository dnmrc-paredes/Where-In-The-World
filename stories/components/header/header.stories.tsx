import React, { useState } from "react";
import { Meta } from '@storybook/react'

import '../../../styles/globals.css'

// Component
import { Header } from '../../../components/header/header'

export default {
    title: 'Components/Header',
    component: Header
} as Meta

export const TheHeader = () => {

    const [value, setValue] = useState<'light' | 'dark' | undefined>('light')

    return (
        <Header changeTheme={setValue} value={value}> </Header>
    )

}