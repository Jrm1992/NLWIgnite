import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import logoImg from '../../assets/logo-nlw-esports.png'
import { Background } from '../../components/Background';
import { GameCard, GameCardProp } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { THEME } from '../../theme';

import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProp[]>([])

  const navigation = useNavigation()

  function handleOpenGame({ id, title, bannerUrl }: GameCardProp ){
    navigation.navigate('game', { id, title, bannerUrl })
  }

  useEffect(() => {
    fetch('http://192.168.1.5:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])
  
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logo}
        />

        <Heading
          title='Encontre seu duo!'
          subtitle='Selecione o game que deseja jogar...' 
        />

        <FlatList 
          data={games}
          keyExtractor={item => item.id}
          renderItem={ ({ item }) => (
            <GameCard
            data={item}
            onPress={() => handleOpenGame(item)}
          />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}