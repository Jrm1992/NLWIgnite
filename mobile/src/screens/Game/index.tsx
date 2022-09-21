import { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { FlatList, Image, ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameParams } from '../../@types/navigation';
import { Background } from '../../components/Background';
import { Entypo } from '@expo/vector-icons'

import { styles } from './styles'
import { THEME } from '../../theme';

import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch'

export function Game() {
  const navigation = useNavigation()

  const [duos, setDuos] = useState<DuoCardProps[]>([])

  const route = useRoute()
  const game = route.params as GameParams

  useEffect(() => {
    fetch(`http://192.168.1.12:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data))
  }, [])
  

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={24}
            />
          </TouchableOpacity>

          <Image 
            source={logoImg} 
            style={styles.logo}
          />
          <View style={styles.right} />
        </View>

        <Image
          source={{uri: game.bannerUrl}}
          style={styles.cover}
          resizeMode="cover"
        />
        <Heading
          title={game.title}
          subtitle='Conect-se e comece a jogar!'
        />

        <FlatList 
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <DuoCard data={item} onConnect={() => {}} />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Nao ha anuncios publicados para este jogo.
            </Text>
          )}
        />

        <DuoMatch 
          visible
          discord='TESTE'
        />

      </SafeAreaView>
    </Background>
  );
}