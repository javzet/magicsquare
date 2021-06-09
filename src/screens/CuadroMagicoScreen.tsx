import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Keyboard } from '../components/Keyboard';
import { MagicSquare } from '../components/MagicSquare';
import { MagicSquareContext } from '../Context/MagicSquareContext';
import useKeyboard from '../hooks/useKeyboard';
import useMagicSquare from '../hooks/useMagicSquare';
import { styles } from '../theme/AppTheme';
import { MS_Base } from '../types';

export const CuadroMagicoScreen = () => {
  // const [magicSquare, setGeneralMagicSquare] = useState<MS_Base>([]);

  const {
    createMagicSquare,
    magicSquare,
    setMagicSquare,
    setCurrentCell,
    currentCellState,
    originalMagicSquare,
    setOriginalMagicSquare,
    evalMagicSquare,
  } = useMagicSquare();

  useEffect(() => {
    const ms = createMagicSquare();
    setMagicSquare(ms.generatedMagicSquare);
    setOriginalMagicSquare(ms.originalMagicSquare);
  }, []);

  return (
    <View style={styles.container}>
      <MagicSquareContext
        value={{
          magicSquare,
          originalMagicSquare,
          currentCellState,
          setMagicSquare,
          setOriginalMagicSquare,
          setCurrentCell,
          createMagicSquare,
          evalMagicSquare,
        }}>
        <MagicSquare />
        <Keyboard />
      </MagicSquareContext>
    </View>
  );
};
