import React from 'react';
import {View} from 'react-native';
import {styles} from '../theme/AppTheme';
import {KeyboardButton} from './KeyboardButton';

export const Keyboard = () => {
  return (
    <View>
      <View style={styles.keyboard}>
        <View style={styles.keyboardRow}>
          <KeyboardButton value="1" />
          <KeyboardButton value="2" />
          <KeyboardButton value="3" />
        </View>

        <View style={styles.keyboardRow}>
          <KeyboardButton value="4" />
          <KeyboardButton value="5" />
          <KeyboardButton value="6" />
        </View>

        <View style={styles.keyboardRow}>
          <KeyboardButton value="7" />
          <KeyboardButton value="8" />
          <KeyboardButton value="9" />
        </View>
      </View>
    </View>
  );
};
