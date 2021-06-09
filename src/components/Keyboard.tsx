import React, { useContext } from 'react';
import { View } from 'react-native';
import { DataContext } from '../helpers/createContext';
import useKeyboard from '../hooks/useKeyboard';
import { styles } from '../theme/AppTheme';
import { KeyboardButton } from './KeyboardButton';

export const Keyboard = () => {
  const { currentCellState } = useContext(DataContext);

  const { setNumber, resetMagicSquare, evalMS } = useKeyboard();

  return (
    <View>
      <View style={styles.keyboard}>
        <View style={styles.keyboardRow}>
          <KeyboardButton
            value="7"
            action={setNumber}
            selectedCellData={currentCellState}
          />
          <KeyboardButton
            value="8"
            action={setNumber}
            selectedCellData={currentCellState}
          />
          <KeyboardButton
            value="9"
            action={setNumber}
            selectedCellData={currentCellState}
          />
          <KeyboardButton value="C" action={resetMagicSquare} />
        </View>

        <View style={styles.keyboardRow}>
          <KeyboardButton
            value="4"
            action={setNumber}
            selectedCellData={currentCellState}
          />
          <KeyboardButton
            value="5"
            action={setNumber}
            selectedCellData={currentCellState}
          />
          <KeyboardButton
            value="6"
            action={setNumber}
            selectedCellData={currentCellState}
          />
          <KeyboardButton value="del" action={setNumber} />
        </View>

        <View style={styles.keyboardRow}>
          <KeyboardButton
            value="1"
            action={setNumber}
            selectedCellData={currentCellState}
          />
          <KeyboardButton
            value="2"
            action={setNumber}
            selectedCellData={currentCellState}
          />
          <KeyboardButton
            value="3"
            action={setNumber}
            selectedCellData={currentCellState}
          />
          <KeyboardButton value="ret" action={setNumber} />
        </View>

        <View style={styles.keyboardRow}>
          <KeyboardButton
            value="0"
            double
            action={setNumber}
            selectedCellData={currentCellState}
          />
          <KeyboardButton value="Eval" double action={evalMS} />
        </View>
      </View>
    </View>
  );
};
