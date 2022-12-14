import { LinearGradient } from 'expo-linear-gradient';
import { Text, TouchableOpacityProps, TouchableOpacity, ImageBackground, ImageSourcePropType } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

export interface GameCardProp{
  id: string,
  title: string,
  _count:{
    ads: number},
  bannerUrl: string
}

interface Props extends TouchableOpacityProps{
  data: GameCardProp
}

export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground
        style={styles.cover}
        source={{uri: data.bannerUrl}}
      >

        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name}>
            {data.title}
          </Text>
          <Text style={styles.ads}>
            {data._count.ads} anuncios
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}