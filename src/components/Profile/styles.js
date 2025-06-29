import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    
    justify-content: center;
    align-items: center;

    font-size: 14px;
    padding-right: 123px;
    
    > div {
        width: 200px;
        text-align: end;

        h3 {
            color: ${({ theme }) => theme.COLORS.WHITE};
            width: 100%;
        }

        button {
            background: none;
            border: none;
            color: ${({ theme }) => theme.COLORS.FONT_GRAY};

            cursor: pointer;
        }
    }

    > a > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        margin-left: 9px;
    }
`;