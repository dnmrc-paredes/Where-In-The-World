import React, { useState } from "react";
import { Meta } from '@storybook/react'

import '../../../styles/globals.css'

// Component
import { FilterDropdown } from "../../../components/filterDropdown/filterDropdown";

export default {
    title: 'Components/Filter Dropdown',
    component: FilterDropdown
} as Meta

export const TheFilterDropdown = () => {

    const [value, setValue] = useState('')

    return (
        <FilterDropdown setValue={setValue} >
        </FilterDropdown>
    )

}