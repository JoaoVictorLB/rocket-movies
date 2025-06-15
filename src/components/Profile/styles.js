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
    }

    > div h3 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        width: 100%;
    }

    > div a {
        color: ${({ theme }) => theme.COLORS.FONT_GRAY};
    }

    > a > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        margin-left: 9px;
    }
`;