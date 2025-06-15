import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    margin-top: 30px;

    padding-bottom: 24PX;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.LINE_GRAY};

    > h2 {
        color: ${({ theme }) => theme.COLORS.PINK};
        padding-left: 123px;
        padding-right: 64px;
    }
`;