import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import * as S from './styles';

export function Welcome(){
    return <S.Container>
        <S.Content>
            <S.WrapperAnimation>
                <AnimatedLottieView autoPlay source={require('./pokebola.json')} loop/>
            </S.WrapperAnimation>
        </S.Content>
        <S.Footer>
        </S.Footer>
    </S.Container>
}