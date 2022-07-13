import React, { useEffect, useState} from 'react';
import { FlatList } from "react-native";
import { Card } from '../../components/Card';
import api from '../../service/api';
import * as S from './styles';

type PokemonType = {
    type: string
}

type Pokemon = {
    name: string,
    url: string,
    id: number,
    types: PokemonType[]
}

type Request = {
    id: number;
    types: PokemonType[]
}

export function Home(){

    const [pokemon, setPokemon] = useState<Pokemon[]>([])

    useEffect(() => {
        async function getAllPokemon(){
            const response = await api.get('/pokemon')
            const {results} = response.data;

            const payloadPokemon = await Promise.all(
                results.map(async (pokemon: Pokemon) => {
                    const {id, types} = await getMoreInfo(pokemon.url)

                    return{
                        name: pokemon.name,
                        id,
                        types
                    }
                })
            )

            setPokemon(payloadPokemon) 
        
        }

        getAllPokemon()

    }, [])

    async function getMoreInfo(url: string): Promise<Request>{
        const response = await api.get(url)
        const {id, types} = response.data;

        return{
            id, types 
        }
    }

    return (
        <S.Container>
            <FlatList
                data={pokemon}
                keyExtractor ={pokemon => pokemon.id.toString()}
                renderItem={({item: pokemon}) => (
                    <Card data={pokemon}/>
                )}
            /> 
        </S.Container>
    )
}