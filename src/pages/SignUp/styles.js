import styled from 'styled-components';


export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    >h1{
        font-size: 48px;
        color: ${({theme})=>theme.COLORS.ORANGE};
    }

    >h2{
        font-size: 24px;
        margin: 48px 0;
    }

    >p{
        font-size: 14px;
        color: ${({theme})=>theme.COLORS.GRAY_100};
    }

    >a{
        margin-top: 124px;
        color: ${({theme})=>theme.COLORS.ORANGE};
    }
`;

export const Background= styled.div`
    flex: 1;
    background: url("https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80") no-repeat center center;
    background-size: cover;
    filter: brightness(0.7);
`;