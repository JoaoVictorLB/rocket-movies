import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: 56px;

    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;

    font-weight: 500;

    background-color: ${({ theme, $deleteButton }) => $deleteButton ? theme.COLORS.BACKGROUND_PURPLE : theme.COLORS.PINK};
    color: ${({ theme, $deleteButton }) => $deleteButton ? theme.COLORS.PINK : theme.COLORS.PURPLE};

    &:disabled {
        opacity: 0.5;
    }

    &:hover {
        background-color: ${({ theme, $deleteButton }) => $deleteButton ? theme.COLORS.BACKGROUND_SOFT_PURPLE : theme.COLORS.DARK_PINK};
        cursor: pointer;
    }
`;