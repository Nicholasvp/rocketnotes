import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;
    
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 9px;


    > img {
        width: 70px;
        height: 70px;
        border-radius: 35px;
    }

    > div {
        display: grid;
    }

    span {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 14px;
    }
    strong {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 18px;
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 36px;
    }
`