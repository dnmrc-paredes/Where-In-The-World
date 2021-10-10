import React, { FC } from "react";

import { Base, Dropdown } from "./filterDropdownStyles";

export const FilterDropdown: FC = () => {

    return (
        <Base>
            <Dropdown defaultValue="filter by region" name="Filter by Region">
                <option value="filter by region" disabled hidden> Filter by Region </option>
                <option value="africa"> Africa </option>
                <option value="america"> America </option>
                <option value="asia"> Asia </option>
                <option value="europe"> Europe </option>
                <option value="oceania"> Oceania </option>
            </Dropdown>
        </Base>
    )

}