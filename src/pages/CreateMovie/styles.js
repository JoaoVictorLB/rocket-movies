import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    > main {
        width: 100%;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;
    }

    .tags {
        display: flex;
        
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PURPLE};

        border-radius: 8px;
    }
`;

export const Form = styled.form`
    width: 100%;
    height: 80vh;
    padding: 40px 123px;

    overflow-y: scroll;
    scrollbar-color: ${({theme}) => theme.COLORS.PINK} ${({theme}) => theme.COLORS.BACKGROUND_BASE};

    > header {
        width: 185px;

        > a {
            width: 70px;

            display: flex;
            align-itens: center;
            gap: 8px;

            color: ${({ theme }) => theme.COLORS.PINK};
        }

        > h1 {
            margin-top: 24px;

            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

    > div {
        display: flex;
        gap: 40px;
        justify-content: space-between;

        margin-block: 40px;
    }
`;