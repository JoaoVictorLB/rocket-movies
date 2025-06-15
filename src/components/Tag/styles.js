import styled from 'styled-components';

export const Container = styled.span`
    padding: 8px 16px;
    margin-right: 8px;
    
    font-size: 12px;
    font-weight: 400;
    line-height: normal;

    border-radius: 8px;
    
    color: ${({theme}) => theme.COLORS.WHITE_TAG};
    background-color: ${({theme, $home }) => $home ? theme.COLORS.PURPLE : theme.COLORS.BACKGROUND_TAG};
`;