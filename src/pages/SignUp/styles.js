import styled from 'styled-components';
import backgroundImg from '../../assets/cinema-room.svg';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 135px;

    display: flex;
    flex-direction: column;

    align-items: start;
    justify-content: center;

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 48px;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.SOFT_GRAY};
        font-size: 14px;
    }

    > h2 {
        margin-block: 48px;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > a {
        margin-top: 32px;
        width: 100%;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;