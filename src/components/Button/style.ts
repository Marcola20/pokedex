import styled, {css} from "styled-components/native";

export const Container = styled.TouchableOpacity`
    ${({theme}) => css`
        widht: 100%;
        height: 50px;
        background-color: ${theme.colors.types.red};
        border-radius: 20px;
        justify-content: center;
        align-items: center;
    `}
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: 18px;
        color: ${theme.colors.textWhite};
        padding: 0px 50px 0px 50px;
    `}
`;