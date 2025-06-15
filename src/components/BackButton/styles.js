import styled from 'styled-components';

export const Container = styled.div`
    width: 70px;
    height: 21px;

    > a {
        color: ${({theme}) => theme.COLORS.PINK};
        
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        > p {
            margin-left: 8px;
        }
    }
`;