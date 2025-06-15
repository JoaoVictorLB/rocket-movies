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

    justify-content: center;
    align-items: start;

    text-align: center;

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > h2 {
        font-size: 24px;
        margin: 48px 0;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.SOFT_GRAY};
    }

    > a {
        width: 100%;
        align-items: center;
        margin-top: 42px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;