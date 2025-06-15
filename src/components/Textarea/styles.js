import styled from 'styled-components';

export const Container = styled.textarea`
    width: 100%;
    height: 274px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    resize: none;

    border-radius: 10px;
    padding: 19px 16px;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.FONT_GRAY};
    }
`;