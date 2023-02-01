import styled from "styled-components";

export const Container = styled.button`
    background-color: transparent;
    border: none;
    color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100 };

    font-size: 16px;
    
`