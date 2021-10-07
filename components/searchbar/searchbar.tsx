import React, { FC } from "react";
import { IoSearch } from 'react-icons/io5'

import { Base, SearchBase, SearchInput, Icon } from "./searchbarStyles";

export const SearchbarComponent: FC = () => {

    return (
        <Base>
            <Icon>
                <IoSearch color="gray" size={20} />
            </Icon>
            <SearchBase>
                <SearchInput placeholder="Search for a country..." />
            </SearchBase>
        </Base>
    )

}