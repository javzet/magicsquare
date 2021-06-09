import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { DataContext } from '../helpers/createContext';
import { styles } from '../theme/AppTheme';
import { DefaultData } from '../types';
import { MSCell } from './MSCell';

export const MagicSquare = () => {
  const { magicSquare, setCurrentCell } = useContext(DataContext);

  return (
    <View style={styles.magicSquareContainer}>
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
    </View>
  );
};
