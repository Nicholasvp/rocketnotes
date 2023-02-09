import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 51px auto;
    grid-template-areas: 
    "header"
    "content";

    > header {
        width: 100%;
        height: 144px;
        grid-area: header;

        font-size: 30px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.GRAY_300};

        display: flex;
        align-items: center;
        padding: 0 124px;
    }
`

export const Form = styled.form`
    margin: 0 auto;
`

export const Avatar = styled.div`
    margin: auto 64px 64px;

    position: relative;

    > img {
        width: 186px;
        border-radius: 50%;
    }
    > label {
        background-color: ${({ theme }) => theme.COLORS.ORANGE};
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        font-size: 18px;
                
        border-radius: 50%;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;
        
        input {
            display: none;
        }
    }
`