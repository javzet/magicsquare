import React from 'react';
import { View } from 'react-native';
import useKeyboard from '../hooks/useKeyboard';
import { styles } from '../theme/AppTheme';
import { KeyboardButton } from './KeyboardButton';

export const Keyboard = () => {
  const { setNumber, resetMagicSquare } = useKeyboard();

  return (
    <View>
      <View style={styles.keyboard}>
        <View style={styles.keyboardRow}>
          <KeyboardButton value="7" action={setNumber} />
          <KeyboardButton value="8" action={setNumber} />
          <KeyboardButton value="9" action={setNumber} />
          <KeyboardButton value="C" action={resetMagicSquare} />
        </View>

        <View style={styles.keyboardRow}>
          <KeyboardButton value="4" action={setNumber} />
          <KeyboardButton value="5" action={setNumber} />
          <KeyboardButton value="6" action={setNumber} />
          <KeyboardButton value="del" action={setNumber} />
        </View>

        <View style={styles.keyboardRow}>
          <KeyboardButton value="1" action={setNumber} />
          <KeyboardButton value="2" action={setNumber} />
          <KeyboardButton value="3" action={setNumber} />
          <KeyboardButton value="ret" action={setNumber} />
        </View>

        <View style={styles.keyboardRow}>
          <KeyboardButton value="0" double action={setNumber} />
          <KeyboardButton value="Eval" double action={setNumber} />
        </View>
      </View>
    </View>
  );
};
