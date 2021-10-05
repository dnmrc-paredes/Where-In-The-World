import React, { FC } from "react";
import styled from "styled-components";
import { IoSearchOutline } from 'react-icons/io5'
// Styled Components

const Base = styled.div`
    /* border: solid black 2px; */
    /* background-color: pink; */
    display: flex;
    justify-content: center;
    height: 40px;
    width: 500px;
    box-shadow: 1px 1px 10px 0px #E0DCDC;
    border-radius: 5px;
    overflow: hidden;
    /* padding: 0 10px; */
`

const Icon= styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    /* background-color: yellow; */
`

const SearchBase = styled.div`
    flex: 11;
    display: flex;
    /* background-color: green; */
`

const SearchInput = styled.input`
    border: none;
    outline: none;
    flex: 1;
    padding: 0 10px;
    &::placeholder {
        color: gray;
    }
`

export const SearchbarComponent: FC = () => {

    return (
        <Base>
            <Icon>
                <IoSearchOutline color="gray" size={20} />
            </Icon>
            <SearchBase>
                <SearchInput placeholder="Search for a country..." />
            </SearchBase>
        </Base>
    )

}