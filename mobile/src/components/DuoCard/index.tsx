import { View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export function DuoCard() {
  return (
    <View style={styles.container}>
      <DuoInfo 
        label='Nome'
        value='Jose Roberto'
      />
      <DuoInfo 
        label='Nome'
        value='Jose Roberto'
      />
      <DuoInfo 
        label='Nome'
        value='Jose Roberto'
      />
      <DuoInfo 
        label='Nome'
        value='Jose Roberto'
        colorValue='green'
      />
    

    </View>
  );
}