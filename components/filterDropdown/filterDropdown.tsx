import React, { FC } from "react";
import styled from "styled-components";

const Dropdown = styled.select`
    display: flex;
    justify-content: center;
    height: 40px;
    width: 150px;
    box-shadow: 1px 1px 10px 0px #E0DCDC;
    border-radius: 5px;
    overflow: hidden;
    outline: none;
    border: none;
`

export const FilterDropdown: FC = () => {

    return (
        <Dropdown name="Filter by Region">
            <option value="" disabled selected> Filter by Region </option>
            <option value="africa"> Africa </option>
            <option value="america"> America </option>
            <option value="asia"> Asia </option>
            <option value="europe"> Europe </option>
            <option value="oceania"> Oceania </option>
        </Dropdown>
    )

}