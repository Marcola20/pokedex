import styled, { css }  from "styled-components/native";

type PokemonType = {
    type: string
}

export const PokemonCard = styled.TouchableOpacity<PokemonType>`
    ${({theme, type}) => css`
        background: ${theme.colors.backgroundCard[type]};
        border-radius: 10px;
        margin-top: 30px;
        flex-direction: row;
        padding: 20px;
    `}
`;

export const LeftSide = styled.View`
    widht: 50%;
    position: relative;
`;

export const ImgCardDetailLeftSide = styled.Image`
    position: absolute;
    widht: 74px;
    height: 32px;
    left: 90px
    top: -10px;
`;

export const PokeId = styled.Text`
    ${({theme}) => css`
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        color: ${theme.colors.lightText}
    `}
`;

export const PokeName = styled.Text`
    ${({theme}) => css`
        font-weight: bold;
        font-size: 26px;
        line-height: 31px;
        margin-top: 5px;
        text-transform: capitalize;
        color: ${theme.colors.textWhite}
    `}
`;

export const PokeContentType = styled.View`
    flex-direction: row;
`;

export const PokeType = styled.View<PokemonType>`
    ${({theme, type}) => css`
        background: ${theme.colors.boxType[type]};
        padding: 5px;
        widht: 65px;
        height: 25px;
        border-radius: 3px;
        margin-left: 5px;
        margin-top: 5px;
        justify-content: center;
        align-items: center;
    `}
`;

export const PokeTypeText = styled.Text`
    ${({theme}) => css`
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: ${theme.colors.textWhite};
        text-transform: capitalize;
        padding: 0px 15px 0px 15px;
    `}
`;

export const RightSide = styled.View`
    justify-content: center;
    align-items: center;
    widht: 50%;
    position: reltive;
`;

export const PokeImage = styled.Image`
    margin-top: -40px;
    widht: 130px;
    height: 130px;
`;

export const PokeballDetail = styled.Image`
    position: absolute;
    right: -20px;
`;