import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    
    > main {
        width: 100%;
        height: 450px;
        padding-inline: 123px;
        margin-top: 40px;
    }
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    overflow-y: scroll;
    scrollbar-color: ${({theme}) => theme.COLORS.PINK} ${({theme}) => theme.COLORS.BACKGROUND_BASE};

    > p {
        margin-top: 40px;

        color: ${({theme}) => theme.COLORS.WHITE};
        
        font-size: 16px;
        line-height: normal;
        font-weight: 400;
        text-align: justify;
    }
`;

export const Presentation = styled.div`
    margin-top: 24px;
    
    display: flex;
    align-items: center;

    > h1 {
        padding-right: 19px;

        font-size: 36px;
        color: ${({theme}) => theme.COLORS.WHITE};
    }
`;

export const PresentationInfos = styled.div`
    margin-top: 24px;
    width: 100%;
    display: flex;
    align-items: center;
    
    > * {
        margin-right: 8px;
    }

    > img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
    }

    > p {
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    > svg {
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;

export const TagsSection = styled.div`
    display: flex;
    margin-top: 40px;
`;