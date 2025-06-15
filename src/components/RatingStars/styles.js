import styled from 'styled-components';

export const Container = styled.div`
    width: ${({$home}) => $home ? "100px" : "150px"};;
    display: flex;
    align-items: ${({$home}) => $home ? "start" : "center"};

    > :first-child{
        margin-left: ${({$home}) => $home ? "0px" : null}
    }
`;

export const StarButton = styled.button`
    width: 100%;
    margin-left: ${({$home}) => $home ? "6px" : "10px"};

    background-color: ${({theme, $home}) => $home ? theme.COLORS.SOFT_PINK_WITHOUT_OPACITY : theme.COLORS.BACKGROUND_BASE};
    color: ${({ theme }) => theme.COLORS.PINK};
    
    border: none;
`;