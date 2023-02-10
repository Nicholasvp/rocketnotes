import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content";
`
export const Brand = styled.div`
    grid-area: brand;
    
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme})=>theme.COLORS.BACKGROUND_700};
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};
    >h1{
        font-size: 24px;
        color: ${({theme})=>theme.COLORS.ORANGE};
    }
`;
 export const Menu = styled.ul`
    grid-area: menu;
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};

    padding-top: 64px;
    text-align: center;
    list-style: none;
    overflow: auto;

    > li {
        margin-bottom: 24px;
    }
 `
export const Search = styled.div`
    grid-area: search;
    padding: 64px;
    
`
export const Content = styled.div`
    grid-area: content;
    padding: 0 64px;
    overflow-y: auto;
    margin-left: 10px;
`
export const Newnote = styled.button`
    grid-area: newnote;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border: 0;

    font-size: 20px;
    color: black;

    display: flex;
    align-items: center;
    justify-content: center;
    gap:8px;

    a {
        color: ${({ theme}) => theme.COLORS.BACKGROUND_900};
        display: flex;
        gap: 10px;
        align-items: center;
    }
`