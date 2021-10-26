import styled from "styled-components";

export const Base = styled.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 10px',
    width: '150px',
    backgroundColor: theme.elements,
    borderRadius: '5px',

    '@media screen and (max-width: 800px)': {
        justifyContent: 'flex-start',
        marginTop: '40px'
    }
}))

export const Dropdown = styled.select(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    height: '40px',
    width: '150px',
    overflow: 'hidden',
    outline: 'none',
    border: 'none',
    backgroundColor: theme.elements,
    color: theme.txtColor,
    cursor: 'pointer'
}))