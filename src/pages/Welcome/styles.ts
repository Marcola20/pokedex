import styled, {css} from 'styled-components/native'

export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.colors.backgroundRed}
    `}
`;

export const Content = styled.View`
    height: 70%;
`;

export const WrapperAnimation = styled.View`
    ${({theme}) => css`
        margin-top: 200px
        widht: 200px;
        height: 200px;
        background-color: ${theme.colors.backImgRed};
        border-radius: 100px;
        justify-content: center;
        align-items: center;
    `}
`;

export const Title = styled.Text`
    ${({theme}) => css`
        text-align: center;
        font-size: 40px;
        margin-top: 5px;
        color: ${theme.colors.textWhite};
    `}
`;

export const SubTitle = styled.Text`
    ${({theme}) => css`
        text-align: center;
        font-size: 16px;
        color: ${theme.colors.textWhite};
    `}
`;

export const Footer = styled.View`
    ${({theme}) => css`
        justify-content: center;
        align-items: center;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        height: 30%;
        background-color: ${theme.colors.background};
        border: 5px solid black;
    `}
`;
