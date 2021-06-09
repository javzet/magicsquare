import React, { useState } from 'react';
import { View } from 'react-native';
import { Keyboard } from '../components/Keyboard';
import { MagicSquare } from '../components/MagicSquare';
import { DataContext } from '../helpers/createContext';
import { styles } from '../theme/AppTheme';
import { MS_Base } from '../types';

export const CuadroMagicoScreen = () => {
  const [dataTrasnfer, setdataTrasnfer] = useState<any>(null);
  const [generalMagicSquare, setGeneralMagicSquare] = useState<any>(null);
  const [originalMagicSquare, setOriginalMagicSquare] = useState<MS_Base>([]);

  return (
    <View style={styles.container}>
      <DataContext.Provider
        value={{
          dataTrasnfer,
          setdataTrasnfer,
          generalMagicSquare,
          setGeneralMagicSquare,
          originalMagicSquare,
          setOriginalMagicSquare,
        }}>
        <MagicSquare />
        <Keyboard />
      </DataContext.Provider>
    </View>
  );
};
