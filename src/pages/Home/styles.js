import styled from 'styled-components';

export const Container = styled.div`
    > main {
        margin: 50px 123px;

        > div {
            display: flex;
            justify-content: space-between;

            margin-bottom: 40px;

            > h1 {
                color: ${({theme}) => theme.COLORS.WHITE};
                font-weight: 400;
                font-size: 32px;
                line-height: normal;
            }
        }

        > article {
            display: flex;
            flex-direction: column;
            gap: 24px;

            height: 53vh;
            overflow-y: scroll;
            scrollbar-color: ${({theme}) => theme.COLORS.PINK} ${({theme}) => theme.COLORS.BACKGROUND_BASE};

            > a > section {

                background-color: ${({theme}) => theme.COLORS.SOFT_PINK};
                border-radius: 16px;
                padding: 32px;
        
                > h2 {
                    color: ${({theme}) => theme.COLORS.WHITE};
                    font-weight: 500;
                    font-size: 24px;
                    line-height: normal;
                }
        
                > div {
                    margin-top: 8px;
                }
        
                > p {
                    color: ${({theme}) => theme.COLORS.GRAY};
                    
                    text-align: justify;

                    height: 46px;
                    overflow: hidden;
                    margin-block: 15px;
                }
            }
        }
    }
`;

export const AddMovie = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 13.5px 32px;

    border-radius: 8px;
    border: none;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.PURPLE};

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.DARK_PINK};
        border-color: ${({ theme }) => theme.COLORS.WHITE};
    }
    
    > p {
        padding-left: 8px;
    }
`;