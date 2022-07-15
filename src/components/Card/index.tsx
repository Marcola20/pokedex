import React from "react";
import { TouchableOpacityProps } from "react-native";
import dotsImage from '../../assets/img/dots.png';
import pokeball from '../../assets/img/pokeballCard.png';
import * as S from "./styles";

export type PokemonType = {
    type: {
        name: string
    }
}

export type Pokemon = {
    name: string,
    url: string,
    id: number,
    types: PokemonType[]
}
type Props = {
    data: Pokemon
} & TouchableOpacityProps

export function Card({data, ... rest}: Props){
    return (
        <S.PokemonCard type={data.types[0].type.name} {... rest}>

            <S.LeftSide>
                <S.PokeId> #{data.id} </S.PokeId>
                <S.PokeName> {data.name} </S.PokeName>
                <S.ImgCardDetailLeftSide source={dotsImage} />

                <S.PokeContentType>
                    {data.types.map(pokemonType => 
                        <S.PokeType type={pokemonType.type.name}>
                            <S.PokeTypeText key={pokemonType.type.name}>
                                {pokemonType.type.name}
                            </S.PokeTypeText>
                        </S.PokeType>)} 
                </S.PokeContentType>
            </S.LeftSide>

            <S.RightSide>
                <S.PokeballDetail source={pokeball} />
                <S.PokeImage
                    source={{
                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
                    }}
                />
            </S.RightSide>
        </S.PokemonCard>
    )
}