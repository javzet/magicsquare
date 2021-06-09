/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/AppTheme';

interface KeyboardButtonProps {
  value: string;
  background?: string;
  double?: boolean;
  action: (textNumber: string) => void;
}

export const KeyboardButton = ({
  value,
  background = '#008bf8',
  double = false,
  action,
}: KeyboardButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={() => action(value)}>
      <View
        style={{
          ...styles.keyboarbutton,
          backgroundColor: background,
          width: double ? 164 : 80,
        }}>
        <Text
          style={{
            ...styles.keyboarbuttonText,
            color: background === '#008bf8' ? '#ffffff' : '#000000',
          }}>
          {value}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
