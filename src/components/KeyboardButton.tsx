import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/AppTheme';

interface KeyboardButtonProps {
  value: string;
  action?: (textNumber: string) => void;
}

export const KeyboardButton = ({value, action}: KeyboardButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.85}>
      <View style={styles.keyboarbutton}>
        <Text style={styles.keyboarbuttonText}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};
