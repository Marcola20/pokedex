import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import * as S from './styles';
import { Button } from '../../components/Button';

export function Welcome(){
    return <S.Container>

        <S.Content>
            <S.WrapperAnimation>
                <AnimatedLottieView autoPlay source={require('./pokebola.json')} loop/>
            </S.WrapperAnimation>

            <S.Title> Bem vindo </S.Title>
            <S.SubTitle> Encontre todos os Pokémon </S.SubTitle>
        </S.Content>

        <S.Footer>
            <Button title='Iniciar'/>
        </S.Footer>

    </S.Container>
}