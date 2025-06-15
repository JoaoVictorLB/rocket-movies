import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    padding: 16px;
    margin: 16px;

    background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.BACKGROUND_GRAY };
    color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.GRAY : theme.COLORS.WHITE};

    border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.GRAY}` : "none"};
    border-radius: 10px;

    > input, button {
        border: none;
    }

    > input {
        width: 100%;
        height: 16px;

        background: transparent;
        color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.GRAY : theme.COLORS.WHITE}
    }
    
    > button {
        background: none;
        color: ${({ theme }) => theme.COLORS.PINK};

        &:hover {
            cursor: pointer;
        }
    }
`;