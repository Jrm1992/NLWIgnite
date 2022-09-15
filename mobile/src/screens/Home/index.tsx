import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { View, Image, Text, FlatList } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCard, GameCardProp } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { THEME } from '../../theme';

import { GAMES } from '../../utils/games'

import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProp[]>([])

  useEffect(() => {
    fetch('http://192.168.1.5:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])
  
  return (
    <View style={styles.container}>
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
        />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}