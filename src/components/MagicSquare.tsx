import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { DataContext } from '../helpers/createContext';
import useMagicSquare from '../hooks/useMagicSquare';
import { styles } from '../theme/AppTheme';
import { DefaultData } from '../types';
import { MSCell } from './MSCell';

export const MagicSquare = () => {
  const {
    createMagicSquare,
    setMagicSquare,
    setCurrentCell,
    magicSquare,
    currentCellState,
  } = useMagicSquare();

  const {
    dataTrasnfer,
    setdataTrasnfer,
    setGeneralMagicSquare,
    generalMagicSquare,
    setOriginalMagicSquare,
  } = useContext(DataContext);

  useEffect(() => {
    const ms = createMagicSquare();
    setMagicSquare(ms.generatedMagicSquare);
    setOriginalMagicSquare(ms.generatedMagicSquare);
  }, []);

  useEffect(() => {
    setGeneralMagicSquare(magicSquare);
  }, [magicSquare]);

  useEffect(() => {
    console.log('cambio');
  }, [generalMagicSquare]);

  return (
    <>
      <View style={styles.magic_square}>
        {magicSquare.map((cell: DefaultData, i: number) => (
          <MSCell
            value={cell.value.toString()}
            position={cell.position.toString()}
            key={i}
            action={setCurrentCell}
          />
        ))}
      </View>
      <Text>{JSON.stringify(currentCellState)}</Text>
    </>
  );
};
