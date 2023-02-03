import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;

    > div {
        display: grid;
        justify-content: center;
        text-align: center;
        padding: 200px 150px;
    }

    > div h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.ORANGE};        
    }

    > div p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > img {
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 50vw;
        object-fit: cover;
    }
`