import React, { FC, Dispatch, SetStateAction, ChangeEvent } from "react";

// Styled Components
import { Base, Dropdown } from "./filterDropdownStyles";

// Types
type Props = {
    setValue: Dispatch<SetStateAction<string>>
}

export const FilterDropdown: FC<Props> = ({ setValue }) => {

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value)
    }

    return (
        <Base>
            <Dropdown defaultValue="filter by region" onChange={handleChange} name="Filter by Region">
                <option value="filter by region" disabled hidden> Filter by Region </option>
                <option value="Africa"> Africa </option>
                <option value="Americas"> America </option>
                <option value="Asia"> Asia </option>
                <option value="Europe"> Europe </option>
                <option value="Oceania"> Oceania </option>
            </Dropdown>
        </Base>
    )

}