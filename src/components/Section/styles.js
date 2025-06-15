import styled from 'styled-components';

export const Container = styled.section`
    > h2 {
        color: ${({ theme }) => theme.COLORS.GRAY};

        font-size: 20px;
        font-weight: 400;
        line-height: normal;

        margin-top: 40px;
        margin-bottom: 24px; 
    }
`;